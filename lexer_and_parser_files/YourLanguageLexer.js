
import antlr4 from 'antlr4';


const serializedATN = [4,0,27,215,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,1,
0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,
6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,
1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,3,21,163,8,21,1,21,1,21,
1,21,1,22,1,22,5,22,170,8,22,10,22,12,22,173,9,22,1,22,3,22,176,8,22,1,22,
1,22,1,23,1,23,1,23,1,23,5,23,184,8,23,10,23,12,23,187,9,23,1,23,1,23,1,
24,1,24,1,24,1,24,5,24,195,8,24,10,24,12,24,198,9,24,1,24,1,24,1,24,1,24,
1,24,1,25,4,25,206,8,25,11,25,12,25,207,1,25,1,25,1,26,1,26,1,26,1,26,1,
196,0,27,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,
27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,
51,26,53,27,1,0,6,1,0,48,57,1,0,48,51,1,0,48,53,1,0,49,57,2,0,10,10,13,13,
3,0,9,10,13,13,32,32,221,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,
0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,
0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,
0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,
0,0,0,1,55,1,0,0,0,3,60,1,0,0,0,5,66,1,0,0,0,7,73,1,0,0,0,9,81,1,0,0,0,11,
84,1,0,0,0,13,89,1,0,0,0,15,92,1,0,0,0,17,95,1,0,0,0,19,98,1,0,0,0,21,103,
1,0,0,0,23,110,1,0,0,0,25,116,1,0,0,0,27,121,1,0,0,0,29,129,1,0,0,0,31,136,
1,0,0,0,33,143,1,0,0,0,35,146,1,0,0,0,37,150,1,0,0,0,39,152,1,0,0,0,41,154,
1,0,0,0,43,162,1,0,0,0,45,175,1,0,0,0,47,179,1,0,0,0,49,190,1,0,0,0,51,205,
1,0,0,0,53,211,1,0,0,0,55,56,5,79,0,0,56,57,5,80,0,0,57,58,5,69,0,0,58,59,
5,78,0,0,59,2,1,0,0,0,60,61,5,67,0,0,61,62,5,76,0,0,62,63,5,79,0,0,63,64,
5,83,0,0,64,65,5,69,0,0,65,4,1,0,0,0,66,67,5,84,0,0,67,68,5,85,0,0,68,69,
5,82,0,0,69,70,5,78,0,0,70,71,5,79,0,0,71,72,5,78,0,0,72,6,1,0,0,0,73,74,
5,84,0,0,74,75,5,85,0,0,75,76,5,82,0,0,76,77,5,78,0,0,77,78,5,79,0,0,78,
79,5,70,0,0,79,80,5,70,0,0,80,8,1,0,0,0,81,82,5,73,0,0,82,83,5,70,0,0,83,
10,1,0,0,0,84,85,5,69,0,0,85,86,5,76,0,0,86,87,5,83,0,0,87,88,5,69,0,0,88,
12,1,0,0,0,89,90,5,65,0,0,90,91,5,84,0,0,91,14,1,0,0,0,92,93,5,73,0,0,93,
94,5,78,0,0,94,16,1,0,0,0,95,96,5,73,0,0,96,97,5,83,0,0,97,18,1,0,0,0,98,
99,5,68,0,0,99,100,5,79,0,0,100,101,5,79,0,0,101,102,5,82,0,0,102,20,1,0,
0,0,103,104,5,87,0,0,104,105,5,73,0,0,105,106,5,78,0,0,106,107,5,68,0,0,
107,108,5,79,0,0,108,109,5,87,0,0,109,22,1,0,0,0,110,111,5,76,0,0,111,112,
5,73,0,0,112,113,5,71,0,0,113,114,5,72,0,0,114,115,5,84,0,0,115,24,1,0,0,
0,116,117,5,87,0,0,117,118,5,73,0,0,118,119,5,70,0,0,119,120,5,73,0,0,120,
26,1,0,0,0,121,122,5,65,0,0,122,123,5,73,0,0,123,124,5,82,0,0,124,125,5,
67,0,0,125,126,5,79,0,0,126,127,5,78,0,0,127,128,5,68,0,0,128,28,1,0,0,0,
129,130,5,79,0,0,130,131,5,80,0,0,131,132,5,69,0,0,132,133,5,78,0,0,133,
134,5,69,0,0,134,135,5,68,0,0,135,30,1,0,0,0,136,137,5,67,0,0,137,138,5,
76,0,0,138,139,5,79,0,0,139,140,5,83,0,0,140,141,5,69,0,0,141,142,5,68,0,
0,142,32,1,0,0,0,143,144,5,79,0,0,144,145,5,78,0,0,145,34,1,0,0,0,146,147,
5,79,0,0,147,148,5,70,0,0,148,149,5,70,0,0,149,36,1,0,0,0,150,151,5,59,0,
0,151,38,1,0,0,0,152,153,5,123,0,0,153,40,1,0,0,0,154,155,5,125,0,0,155,
42,1,0,0,0,156,157,5,48,0,0,157,163,7,0,0,0,158,159,5,49,0,0,159,163,7,0,
0,0,160,161,5,50,0,0,161,163,7,1,0,0,162,156,1,0,0,0,162,158,1,0,0,0,162,
160,1,0,0,0,163,164,1,0,0,0,164,165,7,2,0,0,165,166,7,0,0,0,166,44,1,0,0,
0,167,171,7,3,0,0,168,170,7,0,0,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,
1,0,0,0,171,172,1,0,0,0,172,176,1,0,0,0,173,171,1,0,0,0,174,176,5,48,0,0,
175,167,1,0,0,0,175,174,1,0,0,0,176,177,1,0,0,0,177,178,5,77,0,0,178,46,
1,0,0,0,179,180,5,47,0,0,180,181,5,47,0,0,181,185,1,0,0,0,182,184,8,4,0,
0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,188,
1,0,0,0,187,185,1,0,0,0,188,189,6,23,0,0,189,48,1,0,0,0,190,191,5,47,0,0,
191,192,5,42,0,0,192,196,1,0,0,0,193,195,9,0,0,0,194,193,1,0,0,0,195,198,
1,0,0,0,196,197,1,0,0,0,196,194,1,0,0,0,197,199,1,0,0,0,198,196,1,0,0,0,
199,200,5,42,0,0,200,201,5,47,0,0,201,202,1,0,0,0,202,203,6,24,0,0,203,50,
1,0,0,0,204,206,7,5,0,0,205,204,1,0,0,0,206,207,1,0,0,0,207,205,1,0,0,0,
207,208,1,0,0,0,208,209,1,0,0,0,209,210,6,25,0,0,210,52,1,0,0,0,211,212,
9,0,0,0,212,213,1,0,0,0,213,214,6,26,1,0,214,54,1,0,0,0,7,0,162,171,175,
185,196,207,2,6,0,0,0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class YourLanguageLexer extends antlr4.Lexer {

    static grammarFileName = "YourLanguage.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'OPEN'", "'CLOSE'", "'TURNON'", "'TURNOFF'", 
                         "'IF'", "'ELSE'", "'AT'", "'IN'", "'IS'", "'DOOR'", 
                         "'WINDOW'", "'LIGHT'", "'WIFI'", "'AIRCOND'", "'OPENED'", 
                         "'CLOSED'", "'ON'", "'OFF'", "';'", "'{'", "'}'" ];
	static symbolicNames = [ null, "OPEN", "CLOSE", "TURNON", "TURNOFF", "IF", 
                          "ELSE", "AT", "IN", "IS", "DOOR", "WINDOW", "LIGHT", 
                          "WIFI", "AIRCOND", "OPENED", "CLOSED", "ON", "OFF", 
                          "SEMICOLON", "LBRACE", "RBRACE", "TIME", "DURATION", 
                          "COMMENT", "MULTILINE_COMMENT", "WS", "ERROR_CHAR" ];
	static ruleNames = [ "OPEN", "CLOSE", "TURNON", "TURNOFF", "IF", "ELSE", 
                      "AT", "IN", "IS", "DOOR", "WINDOW", "LIGHT", "WIFI", 
                      "AIRCOND", "OPENED", "CLOSED", "ON", "OFF", "SEMICOLON", 
                      "LBRACE", "RBRACE", "TIME", "DURATION", "COMMENT", 
                      "MULTILINE_COMMENT", "WS", "ERROR_CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

YourLanguageLexer.EOF = antlr4.Token.EOF;
YourLanguageLexer.OPEN = 1;
YourLanguageLexer.CLOSE = 2;
YourLanguageLexer.TURNON = 3;
YourLanguageLexer.TURNOFF = 4;
YourLanguageLexer.IF = 5;
YourLanguageLexer.ELSE = 6;
YourLanguageLexer.AT = 7;
YourLanguageLexer.IN = 8;
YourLanguageLexer.IS = 9;
YourLanguageLexer.DOOR = 10;
YourLanguageLexer.WINDOW = 11;
YourLanguageLexer.LIGHT = 12;
YourLanguageLexer.WIFI = 13;
YourLanguageLexer.AIRCOND = 14;
YourLanguageLexer.OPENED = 15;
YourLanguageLexer.CLOSED = 16;
YourLanguageLexer.ON = 17;
YourLanguageLexer.OFF = 18;
YourLanguageLexer.SEMICOLON = 19;
YourLanguageLexer.LBRACE = 20;
YourLanguageLexer.RBRACE = 21;
YourLanguageLexer.TIME = 22;
YourLanguageLexer.DURATION = 23;
YourLanguageLexer.COMMENT = 24;
YourLanguageLexer.MULTILINE_COMMENT = 25;
YourLanguageLexer.WS = 26;
YourLanguageLexer.ERROR_CHAR = 27;



