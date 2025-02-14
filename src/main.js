import antlr4 from 'antlr4';
import YourLanguageLexer from './YourLanguageLexer.js';
import YourLanguageParser from './YourLanguageParser.js';

// Example input
const input = `IF DOOR IS OPENED {
    TURNON LIGHT AT 1430; abduibsic 2260 2359 2400 0000 0M 09090M 1920910M 0 < 123 0969090M;
}`;

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

// Function to test the parser
function testParser(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new YourLanguageLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new YourLanguageParser(tokens);

    // Enable parser tracing
    parser.setTrace(true);

    // Add custom error listener
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorListener());

    // Parse the input starting from the root rule (e.g., 'program')
    const tree = parser.program();

    // Print the parse tree (for debugging)
    console.log(tree.toStringTree(parser.ruleNames));

    // Print tokens
    tokens.fill();
    console.log('\nTokens:');
    console.log('-------');
    tokens.tokens.forEach(token => {
        const tokenTypeName = tokenTypes[token.type] || `EOF (${token.type})`;
        console.log(`${tokenTypeName}: '${token.text}'`);
    });
}

// Custom error listener
class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        console.error(`Syntax error at line ${line}:${column} - ${msg}`);
    }
}

// Test cases
testParser(" //gaming.txt \n IF DOOR IS CLOSED { IF DOOR IS OPENED { CLOSE WINDOW AT 2359; } } ELSE { TURNOFF LIGHT IN 90M; } "); // Valid
// testParser("OPEN DOOR; TURNOFF LIGHT;");  // Invalid
// testParser("IF DOOR IS OPENED { OPEN WINDOW; } ELSE { CLOSE WINDOW; }"); // Complex