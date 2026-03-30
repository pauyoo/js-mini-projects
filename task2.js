const prompt = require("prompt-sync")();

let amount = prompt("Enter Amount: ");
if (amount > 500) {
    console.log("Number is big");
}
else {
    console.log("Number is small");
}


