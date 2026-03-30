// WHILE LOOPS
const prompt = require("prompt-sync")();

let balance = 1000;
let amount;

while (true) {
    amount = Number(prompt("Enter Amount (0 to exit): "));

    if (amount === 0); {
        break;
    }
}