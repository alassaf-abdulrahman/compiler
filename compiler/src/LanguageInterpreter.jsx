import React, { useState, useRef } from "react";
import "./LanguageParser.css";

// ------------------ Helper Functions ------------------

// Utility: Capitalize a string.
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Tokenizer: Splits input into tokens and assigns line numbers.
function tokenize(input) {
  const tokens = [];
  const lines = input.split("\n");
  // Regex matches commands, numbers, and punctuation (including semicolon).
  const tokenRegex =
    /\b(exit|run|open|close|turn on|turn off|lights|wifi|aircond|door|window|am|pm|at|in|and|\d+)\b|[=;:]/gi;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    let match;
    while ((match = tokenRegex.exec(line)) !== null) {
      const value = match[0];
      const token = { line: lineIndex + 1 }; // line numbers start at 1
      if (value === "=") {
        token.type = "EQUALS";
        token.value = "=";
      } else if (value === ":") {
        token.type = "COLON";
        token.value = ":";
      } else if (value === ";") {
        token.type = "SEMICOLON";
        token.value = ";";
      } else if (!isNaN(value)) {
        token.type = "NUMBER";
        token.value = parseInt(value, 10);
      } else {
        token.type = value.toUpperCase().replace(/\s+/g, "_");
        token.value = value;
      }
      tokens.push(token);
    }
  }
  // Add an EOF token at the end.
  tokens.push({ type: "EOF", value: null, line: lines.length });
  return tokens;
}

// Parser: Uses the tokenizer to build a result object.
function parse(input) {
  const tokens = tokenize(input);
  let pos = 0;
  const result = { actions: [] };

  // Advance the token pointer.
  function add_pos() {
    pos++;
  }

  // Helper to get the current token's line number (or fallback).
  function currentLine() {
    return tokens[pos]
      ? tokens[pos].line
      : tokens[pos - 1]
      ? tokens[pos - 1].line
      : "unknown";
  }

  function parseAction() {
    const command = tokens[pos].type;
    add_pos();

    let action = { command };

    if (command === "OPEN" || command === "CLOSE") {
      action.target = parseTarget();
    } else if (command === "TURN_ON" || command === "TURN_OFF") {
      action.device = parseDevice();
    } else if (command === "RUN") {
      action = parseRunCommand();
    } else {
      throw new Error(
        `Line ${currentLine()}: Expected 'RUN', 'OPEN', 'CLOSE', 'TURN_ON', or 'TURN_OFF'`
      );
    }

    // Check for an optional time expression.
    if (
      tokens[pos] &&
      (tokens[pos].type === "AT" || tokens[pos].type === "IN")
    ) {
      add_pos();
      action.time = parseTimeExpression();
    }
    return action;
  }

  function parseRunCommand() {
    const actionType = tokens[pos].type;
    add_pos();

    if (actionType === "OPEN" || actionType === "CLOSE") {
      return { command: actionType, target: parseTarget() };
    } else if (actionType === "TURN_ON" || actionType === "TURN_OFF") {
      return { command: actionType, device: parseDevice() };
    } else {
      throw new Error(
        `Line ${currentLine()}: Expected 'open', 'close', 'turn on', or 'turn off'`
      );
    }
  }

  function parseTarget() {
    if (!["DOOR", "WINDOW"].includes(tokens[pos].type)) {
      throw new Error(`Line ${currentLine()}: Expected 'door' or 'window'`);
    }
    return tokens[pos++].type;
  }

  function parseDevice() {
    if (!["LIGHTS", "WIFI", "AIRCOND"].includes(tokens[pos].type)) {
      throw new Error(
        `Line ${currentLine()}: Expected 'lights', 'wifi', or 'aircond'`
      );
    }
    return tokens[pos++].type;
  }

  function parseTimeExpression() {
    const hours = tokens[pos];
    const colon = tokens[pos + 1];
    const minutes = tokens[pos + 2];
    const meridiem = tokens[pos + 3];
    if (
      !hours ||
      hours.type !== "NUMBER" ||
      !colon ||
      colon.type !== "COLON" ||
      !minutes ||
      minutes.type !== "NUMBER" ||
      !meridiem ||
      !["AM", "PM"].includes(meridiem.type)
    ) {
      throw new Error(
        `Line ${hours ? hours.line : currentLine()}: Invalid time format`
      );
    }
    pos += 4;
    return `${hours.value}:${minutes.value} ${meridiem.type}`;
  }

  // Main loop: Process tokens until EOF.
  while (tokens[pos] && tokens[pos].type !== "EOF") {
    // If a semicolon is encountered as a separator between commands, skip it.
    if (tokens[pos].type === "SEMICOLON") {
      add_pos();
      continue;
    }
    result.actions.push(parseAction());
  }

  return result;
}

// Converts a parsed action into a confirmation message.
function getConfirmationMessage(action) {
  switch (action.command) {
    case "OPEN":
      return action.target ? `${capitalize(action.target)} Opened` : "Opened";
    case "CLOSE":
      return action.target ? `${capitalize(action.target)} Closed` : "Closed";
    case "TURN_ON":
      return action.device
        ? `${capitalize(action.device)} Turned On`
        : "Turned On";
    case "TURN_OFF":
      return action.device
        ? `${capitalize(action.device)} Turned Off`
        : "Turned Off";
    default:
      return "Command Executed";
  }
}

// ------------------ React Component ------------------

function LanguageInterpreter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const lineNumbersRef = useRef(null);
  const textAreaRef = useRef(null);

  // Generate line numbers based on the number of lines in the input.
  // Defaults to "1" if the input is empty.
  const lineNumbers =
    input === ""
      ? "1"
      : input
          .split("\n")
          .map((_, index) => index + 1)
          .join("\n");

  // Synchronize the scroll position of the line numbers with the textarea.
  const handleScroll = () => {
    if (lineNumbersRef.current && textAreaRef.current) {
      lineNumbersRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  // When the form is submitted, parse the input and either show confirmations or an error.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().toLowerCase() === "exit") {
      setOutput("GOODBYE!");
      setError("");
      setInput("");
      return;
    }
    try {
      const token = tokenize(input);
      const list = [];
      const result = parse(input);
      // Generate a confirmation message for each action.
      const messages = result.actions.map(getConfirmationMessage);
      for (const tok of token) {
        list.push(tok.type);
      }
      setOutput("Token parsed :"+ list + "\n\n" + messages.join("\n"));
      //setOutput(messages.join("\n"));
      //setError("");
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  return (
    <div className="cmd-container">
      <h1 className="cmd-title">Language Interpreter</h1>
      <form onSubmit={handleSubmit}>
        <div className="cmd-input-container">
          {/* Line numbers container - using the dynamic lineNumbers variable */}
          <pre ref={lineNumbersRef} className="cmd-line-numbers">
            {lineNumbers}
          </pre>
          {/* Textarea for multi-line commands */}
          <textarea
            ref={textAreaRef}
            value={input}
            placeholder="Enter commands..."
            onChange={(e) => setInput(e.target.value)}
            onScroll={handleScroll}
            className="cmd-textarea"
          />
        </div>
        <button type="submit" className="cmd-button">
          Submit
        </button>
      </form>
      {output && <pre className="cmd-output">{output}</pre>}
      {error && <pre className="cmd-error">{error}</pre>}
    </div>
  );
}

export default LanguageInterpreter;
