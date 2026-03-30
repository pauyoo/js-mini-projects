const prompt = require("prompt-sync")();

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "Pauyoo" && password === "1234") {
    console.log("Login Sucessfull");
}
else {
    console.log("Invalid Credentials");
}