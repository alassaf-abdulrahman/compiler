function tokenize(input) {
    const tokens = [];
    const tokenRegex = /\b(exit|run|open|close|turn on|turn off|lights|wifi|aircond|door|window|am|pm|at|in|and|\d+)\b|[=:]/gi;
    
    let match;
    while ((match = tokenRegex.exec(input)) !== null) {
        let value = match[0]; // Use match[0] instead of match[1]
    
        if (value === "=") {
            tokens.push({ type: "EQUALS", value: "=" });
        } else if (value === ":") {
            tokens.push({ type: "COLON", value: ":" });
        }
        else if (!isNaN(value))
        {
            tokens.push({ type: "NUMBER", value: parseInt(value) });
        }
        else if (value) {
            tokens.push({ type: value.toUpperCase().replace(/\s+/g, "_"), value: value });
        }
    }

    tokens.push({ type: "EOF", value: null });
    return tokens;
}

module.exports = { tokenize };