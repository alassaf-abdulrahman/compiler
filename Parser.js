const { tokenize } = require('./Lexer');
let pos = 0;

function parse(input) {
    const tokens = tokenize(input);
    const list_token = {token_list: []}
    for (const token of tokens) {
        list_token.token_list.push(token);
    }
    console.log(list_token);
    const result = { actions: [] };
    pos = 0;

    while (tokens.length > pos) {
        if (tokens[pos].type === 'EOF') break;

        result.actions.push(parseAction(tokens));

        while (tokens[pos] && tokens[pos].type === 'AND') {
            add_pos();
            result.actions.push(parseAction(tokens));
        }
    }

    return result;
}

function parseAction(tokens) {
    let command = tokens[pos].type;
    add_pos();

    let action = { command };

    if (command === 'OPEN' || command === 'CLOSE') {
        action.target = parseTarget(tokens);
    } 
    else if (command === 'TURN_OFF' || command === 'TURN_ON') {
        action.device = parseDevice(tokens);
    } 
    else if (command === 'RUN') {
        action = parseRunCommand(tokens);
    } 
    else {
        throw new Error("Expected 'RUN', 'OPEN', 'CLOSE', 'TURN_ON', or 'TURN_OFF'");
    }

    if (tokens[pos] && (tokens[pos].type === 'AT' || tokens[pos].type === 'IN')) {
        add_pos();
        action.time = parseTimeExpression(tokens);
    }

    return action;
}

function add_pos() { pos++; }

function parseRunCommand(tokens) {
    let actionType = tokens[pos].type;
    add_pos();

    if (actionType === 'OPEN' || actionType === 'CLOSE') {
        return { command: actionType, target: parseTarget(tokens) };
    } 
    else if (actionType === 'TURN_ON' || actionType === 'TURN_OFF') {
        return { command: actionType, device: parseDevice(tokens) };
    } 
    else {
        throw new Error("Expected 'open', 'close', 'turn on', or 'turn off'");
    }
}

function parseTarget(tokens) {
    if (!['DOOR', 'WINDOW'].includes(tokens[pos].type)) {
        throw new Error("Expected 'door' or 'window'");
    }
    return tokens[pos++].type;
}

function parseDevice(tokens) {
    if (!['LIGHTS', 'WIFI', 'AIRCOND'].includes(tokens[pos].type)) {
        throw new Error("Expected 'light', 'wifi', or 'aircond'");
    }
    return tokens[pos++].type;
}

function parseTimeExpression(tokens) {
    const [hours, colon, minutes, meridiem] = tokens.slice(pos, pos + 4);
    if (hours.type !== 'NUMBER' || colon.type !== 'COLON' || minutes.type !== 'NUMBER' || !['AM', 'PM'].includes(meridiem.type)) {
        throw new Error("Invalid time format");
    }
    pos += 4;
    return `${hours.value}:${minutes.value} ${meridiem.type}`;
}

module.exports = { parse };
