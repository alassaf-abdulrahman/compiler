grammar YourLanguage;

// Top-level program structure
program: commandList EOF;

// Command list with semicolon separation
commandList
    : command ';' commandList?
    | error       // Error recovery
    ;

// Command types
command
    : basicCommand scheduleTiming?  // Basic commands with optional scheduling
    | ifCommand                     // Control flow
    ;

// Basic command types
basicCommand
    : openCommand 
    | closeCommand 
    | turnonCommand 
    | turnoffCommand
    ;

// Command definitions
openCommand: OPEN openTask;
closeCommand: CLOSE openTask;
turnonCommand: TURNON turnTask;
turnoffCommand: TURNOFF turnTask;

// Scheduling
scheduleTiming: (AT time | IN duration);

// Control flow
ifCommand: IF condition LBRACE block RBRACE elseBlock?;
elseBlock: ELSE LBRACE block RBRACE;

// Block of commands
block: commandList?;

// Conditions
condition
    : openTask IS openState 
    | turnTask IS turnState
    ;

// Task types
openTask: DOOR | WINDOW;
turnTask: LIGHT | WIFI | AIRCOND;

// States
openState: OPENED | CLOSED;
turnState: ON | OFF;

// Parser rules for time and duration
time: TIME;
duration: DURATION;

// Lexer rules for keywords
OPEN: 'OPEN';
CLOSE: 'CLOSE';
TURNON: 'TURNON';
TURNOFF: 'TURNOFF';
IF: 'IF';
ELSE: 'ELSE';
AT: 'AT';
IN: 'IN';
IS: 'IS';

// Lexer rules for objects
DOOR: 'DOOR';
WINDOW: 'WINDOW';
LIGHT: 'LIGHT';
WIFI: 'WIFI';
AIRCOND: 'AIRCOND';

// Lexer rules for states
OPENED: 'OPENED';
CLOSED: 'CLOSED';
ON: 'ON';
OFF: 'OFF';

// Lexer rules for symbols
SEMICOLON: ';';
LBRACE: '{';
RBRACE: '}';

// Lexer rules for time and duration
TIME: ('0'[0-9]|'1'[0-9]|'2'[0-3])[0-5][0-9];    // 24-hour format (0000 to 2359)
DURATION: ([1-9][0-9]*|'0') 'M';                  // Duration in minutes (e.g., 0M, 59M, 100M)

// Comments
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;

// Skip whitespace
WS: [ \t\r\n]+ -> skip;

// Error handling
error: ERROR_CHAR+;
ERROR_CHAR: . -> channel(HIDDEN);
