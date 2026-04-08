const prompt = require("prompt-sync")();

let balance = 1000;
let ammount = Number(prompt("Enter ammount: ")); 
/// Prompts works with strings so the "Number"prompt is used to convert back to int

if (ammount <= 0 ) {
    console.log("Invalid Ammount");
}
else if (ammount > balance) {
    console.log("Insufficient funds");
}
else {
    console.log("Sucessfull")
}

