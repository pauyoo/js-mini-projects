// ATM Project for users to withdraw and check their account balance 
let balance = 1000;
const pin = "1234";

let entry = prompt("enter your pin: ");
if (entry === pin) {
    console.log("login sucessfull");
}