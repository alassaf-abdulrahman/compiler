// Generated from YourLanguage.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import YourLanguageListener from './YourLanguageListener.js';
const serializedATN = [4,1,27,126,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,1,1,1,1,1,1,3,1,47,8,1,1,1,3,1,50,8,1,1,2,1,2,3,2,54,8,2,1,2,3,
2,57,8,2,1,3,1,3,1,3,1,3,3,3,63,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,81,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,89,8,
9,1,10,1,10,1,10,1,10,1,10,1,11,3,11,97,8,11,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,3,12,107,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
1,17,1,18,1,18,1,19,4,19,122,8,19,11,19,12,19,123,1,19,0,0,20,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,4,1,0,10,11,1,0,12,14,1,0,
15,16,1,0,17,18,117,0,40,1,0,0,0,2,49,1,0,0,0,4,56,1,0,0,0,6,62,1,0,0,0,
8,64,1,0,0,0,10,67,1,0,0,0,12,70,1,0,0,0,14,73,1,0,0,0,16,80,1,0,0,0,18,
82,1,0,0,0,20,90,1,0,0,0,22,96,1,0,0,0,24,106,1,0,0,0,26,108,1,0,0,0,28,
110,1,0,0,0,30,112,1,0,0,0,32,114,1,0,0,0,34,116,1,0,0,0,36,118,1,0,0,0,
38,121,1,0,0,0,40,41,3,2,1,0,41,42,5,0,0,1,42,1,1,0,0,0,43,44,3,4,2,0,44,
46,5,19,0,0,45,47,3,2,1,0,46,45,1,0,0,0,46,47,1,0,0,0,47,50,1,0,0,0,48,50,
3,38,19,0,49,43,1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,53,3,6,3,0,52,54,3,
16,8,0,53,52,1,0,0,0,53,54,1,0,0,0,54,57,1,0,0,0,55,57,3,18,9,0,56,51,1,
0,0,0,56,55,1,0,0,0,57,5,1,0,0,0,58,63,3,8,4,0,59,63,3,10,5,0,60,63,3,12,
6,0,61,63,3,14,7,0,62,58,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,0,62,61,1,0,0,
0,63,7,1,0,0,0,64,65,5,1,0,0,65,66,3,26,13,0,66,9,1,0,0,0,67,68,5,2,0,0,
68,69,3,26,13,0,69,11,1,0,0,0,70,71,5,3,0,0,71,72,3,28,14,0,72,13,1,0,0,
0,73,74,5,4,0,0,74,75,3,28,14,0,75,15,1,0,0,0,76,77,5,7,0,0,77,81,3,34,17,
0,78,79,5,8,0,0,79,81,3,36,18,0,80,76,1,0,0,0,80,78,1,0,0,0,81,17,1,0,0,
0,82,83,5,5,0,0,83,84,3,24,12,0,84,85,5,20,0,0,85,86,3,22,11,0,86,88,5,21,
0,0,87,89,3,20,10,0,88,87,1,0,0,0,88,89,1,0,0,0,89,19,1,0,0,0,90,91,5,6,
0,0,91,92,5,20,0,0,92,93,3,22,11,0,93,94,5,21,0,0,94,21,1,0,0,0,95,97,3,
2,1,0,96,95,1,0,0,0,96,97,1,0,0,0,97,23,1,0,0,0,98,99,3,26,13,0,99,100,5,
9,0,0,100,101,3,30,15,0,101,107,1,0,0,0,102,103,3,28,14,0,103,104,5,9,0,
0,104,105,3,32,16,0,105,107,1,0,0,0,106,98,1,0,0,0,106,102,1,0,0,0,107,25,
1,0,0,0,108,109,7,0,0,0,109,27,1,0,0,0,110,111,7,1,0,0,111,29,1,0,0,0,112,
113,7,2,0,0,113,31,1,0,0,0,114,115,7,3,0,0,115,33,1,0,0,0,116,117,5,22,0,
0,117,35,1,0,0,0,118,119,5,23,0,0,119,37,1,0,0,0,120,122,5,27,0,0,121,120,
1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,39,1,0,0,0,10,
46,49,53,56,62,80,88,96,106,123];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class YourLanguageParser extends antlr4.Parser {

    static grammarFileName = "YourLanguage.g4";
    static literalNames = [ null, "'OPEN'", "'CLOSE'", "'TURNON'", "'TURNOFF'", 
                            "'IF'", "'ELSE'", "'AT'", "'IN'", "'IS'", "'DOOR'", 
                            "'WINDOW'", "'LIGHT'", "'WIFI'", "'AIRCOND'", 
                            "'OPENED'", "'CLOSED'", "'ON'", "'OFF'", "';'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "OPEN", "CLOSE", "TURNON", "TURNOFF", 
                             "IF", "ELSE", "AT", "IN", "IS", "DOOR", "WINDOW", 
                             "LIGHT", "WIFI", "AIRCOND", "OPENED", "CLOSED", 
                             "ON", "OFF", "SEMICOLON", "LBRACE", "RBRACE", 
                             "TIME", "DURATION", "COMMENT", "MULTILINE_COMMENT", 
                             "WS", "ERROR_CHAR" ];
    static ruleNames = [ "program", "commandList", "command", "basicCommand", 
                         "openCommand", "closeCommand", "turnonCommand", 
                         "turnoffCommand", "scheduleTiming", "ifCommand", 
                         "elseBlock", "block", "condition", "openTask", 
                         "turnTask", "openState", "turnState", "time", "duration", 
                         "error" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = YourLanguageParser.ruleNames;
        this.literalNames = YourLanguageParser.literalNames;
        this.symbolicNames = YourLanguageParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, YourLanguageParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.commandList();
	        this.state = 41;
	        this.match(YourLanguageParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandList() {
	    let localctx = new CommandListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, YourLanguageParser.RULE_commandList);
	    var _la = 0;
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.command();
	            this.state = 44;
	            this.match(YourLanguageParser.SEMICOLON);
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 134217790) !== 0)) {
	                this.state = 45;
	                this.commandList();
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.error();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, YourLanguageParser.RULE_command);
	    var _la = 0;
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.basicCommand();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===8) {
	                this.state = 52;
	                this.scheduleTiming();
	            }

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.ifCommand();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	basicCommand() {
	    let localctx = new BasicCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, YourLanguageParser.RULE_basicCommand);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.openCommand();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.closeCommand();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.turnonCommand();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.turnoffCommand();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	openCommand() {
	    let localctx = new OpenCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, YourLanguageParser.RULE_openCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(YourLanguageParser.OPEN);
	        this.state = 65;
	        this.openTask();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	closeCommand() {
	    let localctx = new CloseCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, YourLanguageParser.RULE_closeCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(YourLanguageParser.CLOSE);
	        this.state = 68;
	        this.openTask();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turnonCommand() {
	    let localctx = new TurnonCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, YourLanguageParser.RULE_turnonCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(YourLanguageParser.TURNON);
	        this.state = 71;
	        this.turnTask();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turnoffCommand() {
	    let localctx = new TurnoffCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, YourLanguageParser.RULE_turnoffCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(YourLanguageParser.TURNOFF);
	        this.state = 74;
	        this.turnTask();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scheduleTiming() {
	    let localctx = new ScheduleTimingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, YourLanguageParser.RULE_scheduleTiming);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 76;
	            this.match(YourLanguageParser.AT);
	            this.state = 77;
	            this.time();
	            break;
	        case 8:
	            this.state = 78;
	            this.match(YourLanguageParser.IN);
	            this.state = 79;
	            this.duration();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifCommand() {
	    let localctx = new IfCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, YourLanguageParser.RULE_ifCommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(YourLanguageParser.IF);
	        this.state = 83;
	        this.condition();
	        this.state = 84;
	        this.match(YourLanguageParser.LBRACE);
	        this.state = 85;
	        this.block();
	        this.state = 86;
	        this.match(YourLanguageParser.RBRACE);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 87;
	            this.elseBlock();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseBlock() {
	    let localctx = new ElseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, YourLanguageParser.RULE_elseBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(YourLanguageParser.ELSE);
	        this.state = 91;
	        this.match(YourLanguageParser.LBRACE);
	        this.state = 92;
	        this.block();
	        this.state = 93;
	        this.match(YourLanguageParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, YourLanguageParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 134217790) !== 0)) {
	            this.state = 95;
	            this.commandList();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, YourLanguageParser.RULE_condition);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.openTask();
	            this.state = 99;
	            this.match(YourLanguageParser.IS);
	            this.state = 100;
	            this.openState();
	            break;
	        case 12:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.turnTask();
	            this.state = 103;
	            this.match(YourLanguageParser.IS);
	            this.state = 104;
	            this.turnState();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	openTask() {
	    let localctx = new OpenTaskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, YourLanguageParser.RULE_openTask);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turnTask() {
	    let localctx = new TurnTaskContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, YourLanguageParser.RULE_turnTask);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	openState() {
	    let localctx = new OpenStateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, YourLanguageParser.RULE_openState);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turnState() {
	    let localctx = new TurnStateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, YourLanguageParser.RULE_turnState);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, YourLanguageParser.RULE_time);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(YourLanguageParser.TIME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	duration() {
	    let localctx = new DurationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, YourLanguageParser.RULE_duration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(YourLanguageParser.DURATION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	error() {
	    let localctx = new ErrorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, YourLanguageParser.RULE_error);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 120;
	            this.match(YourLanguageParser.ERROR_CHAR);
	            this.state = 123; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

YourLanguageParser.EOF = antlr4.Token.EOF;
YourLanguageParser.OPEN = 1;
YourLanguageParser.CLOSE = 2;
YourLanguageParser.TURNON = 3;
YourLanguageParser.TURNOFF = 4;
YourLanguageParser.IF = 5;
YourLanguageParser.ELSE = 6;
YourLanguageParser.AT = 7;
YourLanguageParser.IN = 8;
YourLanguageParser.IS = 9;
YourLanguageParser.DOOR = 10;
YourLanguageParser.WINDOW = 11;
YourLanguageParser.LIGHT = 12;
YourLanguageParser.WIFI = 13;
YourLanguageParser.AIRCOND = 14;
YourLanguageParser.OPENED = 15;
YourLanguageParser.CLOSED = 16;
YourLanguageParser.ON = 17;
YourLanguageParser.OFF = 18;
YourLanguageParser.SEMICOLON = 19;
YourLanguageParser.LBRACE = 20;
YourLanguageParser.RBRACE = 21;
YourLanguageParser.TIME = 22;
YourLanguageParser.DURATION = 23;
YourLanguageParser.COMMENT = 24;
YourLanguageParser.MULTILINE_COMMENT = 25;
YourLanguageParser.WS = 26;
YourLanguageParser.ERROR_CHAR = 27;

YourLanguageParser.RULE_program = 0;
YourLanguageParser.RULE_commandList = 1;
YourLanguageParser.RULE_command = 2;
YourLanguageParser.RULE_basicCommand = 3;
YourLanguageParser.RULE_openCommand = 4;
YourLanguageParser.RULE_closeCommand = 5;
YourLanguageParser.RULE_turnonCommand = 6;
YourLanguageParser.RULE_turnoffCommand = 7;
YourLanguageParser.RULE_scheduleTiming = 8;
YourLanguageParser.RULE_ifCommand = 9;
YourLanguageParser.RULE_elseBlock = 10;
YourLanguageParser.RULE_block = 11;
YourLanguageParser.RULE_condition = 12;
YourLanguageParser.RULE_openTask = 13;
YourLanguageParser.RULE_turnTask = 14;
YourLanguageParser.RULE_openState = 15;
YourLanguageParser.RULE_turnState = 16;
YourLanguageParser.RULE_time = 17;
YourLanguageParser.RULE_duration = 18;
YourLanguageParser.RULE_error = 19;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_program;
    }

	commandList() {
	    return this.getTypedRuleContext(CommandListContext,0);
	};

	EOF() {
	    return this.getToken(YourLanguageParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitProgram(this);
		}
	}


}



class CommandListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_commandList;
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	SEMICOLON() {
	    return this.getToken(YourLanguageParser.SEMICOLON, 0);
	};

	commandList() {
	    return this.getTypedRuleContext(CommandListContext,0);
	};

	error() {
	    return this.getTypedRuleContext(ErrorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterCommandList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitCommandList(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_command;
    }

	basicCommand() {
	    return this.getTypedRuleContext(BasicCommandContext,0);
	};

	scheduleTiming() {
	    return this.getTypedRuleContext(ScheduleTimingContext,0);
	};

	ifCommand() {
	    return this.getTypedRuleContext(IfCommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitCommand(this);
		}
	}


}



class BasicCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_basicCommand;
    }

	openCommand() {
	    return this.getTypedRuleContext(OpenCommandContext,0);
	};

	closeCommand() {
	    return this.getTypedRuleContext(CloseCommandContext,0);
	};

	turnonCommand() {
	    return this.getTypedRuleContext(TurnonCommandContext,0);
	};

	turnoffCommand() {
	    return this.getTypedRuleContext(TurnoffCommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterBasicCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitBasicCommand(this);
		}
	}


}



class OpenCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_openCommand;
    }

	OPEN() {
	    return this.getToken(YourLanguageParser.OPEN, 0);
	};

	openTask() {
	    return this.getTypedRuleContext(OpenTaskContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterOpenCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitOpenCommand(this);
		}
	}


}



class CloseCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_closeCommand;
    }

	CLOSE() {
	    return this.getToken(YourLanguageParser.CLOSE, 0);
	};

	openTask() {
	    return this.getTypedRuleContext(OpenTaskContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterCloseCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitCloseCommand(this);
		}
	}


}



class TurnonCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_turnonCommand;
    }

	TURNON() {
	    return this.getToken(YourLanguageParser.TURNON, 0);
	};

	turnTask() {
	    return this.getTypedRuleContext(TurnTaskContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterTurnonCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitTurnonCommand(this);
		}
	}


}



class TurnoffCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_turnoffCommand;
    }

	TURNOFF() {
	    return this.getToken(YourLanguageParser.TURNOFF, 0);
	};

	turnTask() {
	    return this.getTypedRuleContext(TurnTaskContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterTurnoffCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitTurnoffCommand(this);
		}
	}


}



class ScheduleTimingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_scheduleTiming;
    }

	AT() {
	    return this.getToken(YourLanguageParser.AT, 0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	IN() {
	    return this.getToken(YourLanguageParser.IN, 0);
	};

	duration() {
	    return this.getTypedRuleContext(DurationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterScheduleTiming(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitScheduleTiming(this);
		}
	}


}



class IfCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_ifCommand;
    }

	IF() {
	    return this.getToken(YourLanguageParser.IF, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	LBRACE() {
	    return this.getToken(YourLanguageParser.LBRACE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	RBRACE() {
	    return this.getToken(YourLanguageParser.RBRACE, 0);
	};

	elseBlock() {
	    return this.getTypedRuleContext(ElseBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterIfCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitIfCommand(this);
		}
	}


}



class ElseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_elseBlock;
    }

	ELSE() {
	    return this.getToken(YourLanguageParser.ELSE, 0);
	};

	LBRACE() {
	    return this.getToken(YourLanguageParser.LBRACE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	RBRACE() {
	    return this.getToken(YourLanguageParser.RBRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterElseBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitElseBlock(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_block;
    }

	commandList() {
	    return this.getTypedRuleContext(CommandListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitBlock(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_condition;
    }

	openTask() {
	    return this.getTypedRuleContext(OpenTaskContext,0);
	};

	IS() {
	    return this.getToken(YourLanguageParser.IS, 0);
	};

	openState() {
	    return this.getTypedRuleContext(OpenStateContext,0);
	};

	turnTask() {
	    return this.getTypedRuleContext(TurnTaskContext,0);
	};

	turnState() {
	    return this.getTypedRuleContext(TurnStateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitCondition(this);
		}
	}


}



class OpenTaskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_openTask;
    }

	DOOR() {
	    return this.getToken(YourLanguageParser.DOOR, 0);
	};

	WINDOW() {
	    return this.getToken(YourLanguageParser.WINDOW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterOpenTask(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitOpenTask(this);
		}
	}


}



class TurnTaskContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_turnTask;
    }

	LIGHT() {
	    return this.getToken(YourLanguageParser.LIGHT, 0);
	};

	WIFI() {
	    return this.getToken(YourLanguageParser.WIFI, 0);
	};

	AIRCOND() {
	    return this.getToken(YourLanguageParser.AIRCOND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterTurnTask(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitTurnTask(this);
		}
	}


}



class OpenStateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_openState;
    }

	OPENED() {
	    return this.getToken(YourLanguageParser.OPENED, 0);
	};

	CLOSED() {
	    return this.getToken(YourLanguageParser.CLOSED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterOpenState(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitOpenState(this);
		}
	}


}



class TurnStateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_turnState;
    }

	ON() {
	    return this.getToken(YourLanguageParser.ON, 0);
	};

	OFF() {
	    return this.getToken(YourLanguageParser.OFF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterTurnState(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitTurnState(this);
		}
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_time;
    }

	TIME() {
	    return this.getToken(YourLanguageParser.TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitTime(this);
		}
	}


}



class DurationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_duration;
    }

	DURATION() {
	    return this.getToken(YourLanguageParser.DURATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterDuration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitDuration(this);
		}
	}


}



class ErrorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YourLanguageParser.RULE_error;
    }

	ERROR_CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YourLanguageParser.ERROR_CHAR);
	    } else {
	        return this.getToken(YourLanguageParser.ERROR_CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.enterError(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YourLanguageListener ) {
	        listener.exitError(this);
		}
	}


}




YourLanguageParser.ProgramContext = ProgramContext; 
YourLanguageParser.CommandListContext = CommandListContext; 
YourLanguageParser.CommandContext = CommandContext; 
YourLanguageParser.BasicCommandContext = BasicCommandContext; 
YourLanguageParser.OpenCommandContext = OpenCommandContext; 
YourLanguageParser.CloseCommandContext = CloseCommandContext; 
YourLanguageParser.TurnonCommandContext = TurnonCommandContext; 
YourLanguageParser.TurnoffCommandContext = TurnoffCommandContext; 
YourLanguageParser.ScheduleTimingContext = ScheduleTimingContext; 
YourLanguageParser.IfCommandContext = IfCommandContext; 
YourLanguageParser.ElseBlockContext = ElseBlockContext; 
YourLanguageParser.BlockContext = BlockContext; 
YourLanguageParser.ConditionContext = ConditionContext; 
YourLanguageParser.OpenTaskContext = OpenTaskContext; 
YourLanguageParser.TurnTaskContext = TurnTaskContext; 
YourLanguageParser.OpenStateContext = OpenStateContext; 
YourLanguageParser.TurnStateContext = TurnStateContext; 
YourLanguageParser.TimeContext = TimeContext; 
YourLanguageParser.DurationContext = DurationContext; 
YourLanguageParser.ErrorContext = ErrorContext; 
