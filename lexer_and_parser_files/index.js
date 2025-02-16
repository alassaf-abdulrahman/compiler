import antlr4 from 'antlr4';
import YourLanguageLexer from './YourLanguageLexer.js';
import YourLanguageParser from './YourLanguageParser.js';
import { buildAST, visualizeAST } from './astdisplay.js';

// Token type dictionary
const tokenTypes = {
    1: 'KW_OPEN',
    2: 'KW_CLOSE',
    3: 'KW_TURNON',
    4: 'KW_TURNOFF',
    5: 'KW_IF',
    6: 'KW_ELSE',
    7: 'KW_AT',
    8: 'KW_IN',
    9: 'KW_IS',
    10: 'TASK_DOOR',
    11: 'TASK_WINDOW',
    12: 'TASK_LIGHT',
    13: 'TASK_WIFI',
    14: 'TASK_AIRCOND',
    15: 'STATE_OPENED',
    16: 'STATE_CLOSED',
    17: 'STATE_ON',
    18: 'STATE_OFF',
    19: 'SEMICOLON',
    20: 'LBRACE',
    21: 'RBRACE',
    22: 'TIME',
    23: 'DURATION',
    24: 'COMMENT',
    25: 'MULTILINE_COMMENT',
    27: 'ERROR_CHAR',
};

// Custom error listener
class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = []; 
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        const errorMessage = `Syntax error at line ${line}: Character ${column + 1} - ${msg}`;
        this.errors.push({ line, message: errorMessage }); 
    }

    addInvalidTokenError(token) {
        const errorMessage = `Invalid character at line ${token.line}: Character ${token.column + 1} - '${token.text}'`;
        this.errors.push({ line: token.line, message: errorMessage }); 
    }
}

// Function to parse the input and display results
function parse() {
    try {
        const input = document.getElementById('input').value;
        document.getElementById('ast-visualization').innerHTML = '';
        const chars = new antlr4.InputStream(input);
        const lexer = new YourLanguageLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new YourLanguageParser(tokens);

        const errorListener = new ErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const parseTree = parser.program();

        // Check for ERROR_CHAR tokens
        const errorChars = tokens.tokens.filter(token => token.type === YourLanguageLexer.ERROR_CHAR);
        if (errorChars.length > 0) {
            errorChars.forEach(token => {
                errorListener.addInvalidTokenError(token); 
            });
        }

        const outputTokens = document.getElementById('output-tokens');
        outputTokens.value = tokens.tokens
            .map(token => {
                const tokenTypeName = tokenTypes[token.type] || `EOF (${token.type})`;
                return `${tokenTypeName}: '${token.text}'`;
            })
            .join('\n');

        const compilationMessage = document.getElementById('compilation-message');
        if (errorListener.errors.length > 0) {
            // Group errors by line number
            const errorsByLine = {};
            errorListener.errors.forEach(error => {
                if (!errorsByLine[error.line]) {
                    errorsByLine[error.line] = [];
                }
                errorsByLine[error.line].push(error.message);
            });

            // Display errors line by line
            let errorMessages = [];
            for (const line in errorsByLine) {
                errorMessages.push(`Line ${line}:`);
                errorsByLine[line].forEach(message => {
                    errorMessages.push(` \t - ${message}`);
                });
                errorMessages.push('<br>');
            }

            compilationMessage.innerHTML = `<div class="error">${errorMessages.join('<br>')}</div>`;
        } else {
            compilationMessage.innerHTML = `<div class="success">Compilation successful!</div>`;
            visualizeAST(parseTree, '#ast-visualization');
        }
    } catch (e) {
        const compilationMessage = document.getElementById('compilation-message');
        compilationMessage.innerHTML = `<div class="error">Error: ${e.message}</div>`;
        document.getElementById('output-tokens').value = '';
        console.error(e);
    }
}

// Expose the parse function to the global scope
window.parse = parse;