import React, { useState } from "react";

// ------------------ Helper Functions ------------------

// Tokenizer function: splits input into tokens.
function tokenize(input) {
  const tokens = [];
  // Regex to match commands, numbers, and punctuation.
  const tokenRegex =
    /\b(exit|run|open|close|turn on|turn off|lights|wifi|aircond|door|window|am|pm|at|in|and|\d+)\b|[=:]/gi;
  let match;

  while ((match = tokenRegex.exec(input)) !== null) {
    let value = match[0];

    if (value === "=") {
      tokens.push({ type: "EQUALS", value: "=" });
    } else if (value === ":") {
      tokens.push({ type: "COLON", value: ":" });
    } else if (!isNaN(value)) {
      tokens.push({ type: "NUMBER", value: parseInt(value, 10) });
    } else if (value) {
      // Convert the token to uppercase and replace spaces with underscores.
      tokens.push({
        type: value.toUpperCase().replace(/\s+/g, "_"),
        value: value,
      });
    }
  }

  tokens.push({ type: "EOF", value: null });
  return tokens;
}

// Parser function that uses the tokenizer to build a result object.
function parse(input) {
  const tokens = tokenize(input);
  let pos = 0;
  const result = { actions: [] };

  function add_pos() {
    pos++;
  }

  function parseAction() {
    let command = tokens[pos].type;
    add_pos();

    let action = { command };

    if (command === "OPEN" || command === "CLOSE") {
      action.target = parseTarget();
    } else if (command === "TURN_OFF" || command === "TURN_ON") {
      action.device = parseDevice();
    } else if (command === "RUN") {
      action = parseRunCommand();
    } else {
      throw new Error(
        "Expected 'RUN', 'OPEN', 'CLOSE', 'TURN_ON', or 'TURN_OFF'"
      );
    }

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
    let actionType = tokens[pos].type;
    add_pos();

    if (actionType === "OPEN" || actionType === "CLOSE") {
      return { command: actionType, target: parseTarget() };
    } else if (actionType === "TURN_ON" || actionType === "TURN_OFF") {
      return { command: actionType, device: parseDevice() };
    } else {
      throw new Error("Expected 'open', 'close', 'turn on', or 'turn off'");
    }
  }

  function parseTarget() {
    if (!["DOOR", "WINDOW"].includes(tokens[pos].type)) {
      throw new Error("Expected 'door' or 'window'");
    }
    return tokens[pos++].type;
  }

  function parseDevice() {
    if (!["LIGHTS", "WIFI", "AIRCOND"].includes(tokens[pos].type)) {
      throw new Error("Expected 'lights', 'wifi', or 'aircond'");
    }
    return tokens[pos++].type;
  }

  function parseTimeExpression() {
    const hours = tokens[pos];
    const colon = tokens[pos + 1];
    const minutes = tokens[pos + 2];
    const meridiem = tokens[pos + 3];
    if (
      hours.type !== "NUMBER" ||
      colon.type !== "COLON" ||
      minutes.type !== "NUMBER" ||
      !["AM", "PM"].includes(meridiem.type)
    ) {
      throw new Error("Invalid time format");
    }
    pos += 4;
    return `${hours.value}:${minutes.value} ${meridiem.type}`;
  }

  // Process tokens until we hit the EOF token.
  while (tokens.length > pos) {
    if (tokens[pos].type === "EOF") break;

    result.actions.push(parseAction());

    // Support for chaining actions with 'AND'
    while (tokens[pos] && tokens[pos].type === "AND") {
      add_pos();
      result.actions.push(parseAction());
    }
  }

  return result;
}

// ------------------ React Component ------------------

function LanguageInterpreter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().toLowerCase() === "exit") {
      setOutput("GOODBYE!");
      setError("");
      setInput("");
      return;
    }
    try {
      const result = parse(input);
      // Format the parsed result as a pretty JSON string.
      setOutput(JSON.stringify(result, null, 2));
      setError("");
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h1>Language Interpreter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a command..."
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "300px", padding: "0.5rem", fontSize: "1rem" }}
        />
        <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
          Submit
        </button>
      </form>
      {output && (
        <pre
          style={{ background: "#f0f0f0", padding: "1rem", marginTop: "1rem" }}
        >
          Parsed result: {output}
        </pre>
      )}
      {error && (
        <pre
          style={{
            background: "#ffe0e0",
            padding: "1rem",
            marginTop: "1rem",
            color: "red",
          }}
        >
          Error: {error}
        </pre>
      )}
    </div>
  );
}

export default LanguageInterpreter;
