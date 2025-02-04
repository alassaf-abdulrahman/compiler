const readline = require('readline');
const { parse } = require('./Parser');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainLoop() {
    rl.question("Enter a command (exit to quit) : ", (input) => {
        if (input.trim().toLowerCase() === "exit") 
            {
                console.log("GOODBYE!");
                rl.close();
                return;
            }
        try {
            const result = parse(input);
            console.log("Parsed result:", result);
            console.log("command success: ", input);
        } catch (error) {
            console.error("Error parsing input:", error.message);
        }
        mainLoop(); // Recur with another input
    });
}

mainLoop(); // Start the loop
