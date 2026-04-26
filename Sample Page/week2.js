// login system 
let username = "pauyoo";
let password = "1234";

if (username === "pauyoo" && password === "Atoyebi") {
    console.log("Login Sucessfull");
}
else if (username === "pauyoo") {
    console.log("Incorrect Password");
}
else {
    console.log("Invalid credentials");
}

// ATM withdrawal
balance = 1000;
ammount = 500;
if (balance <= 1000) {
    console.log("Withdrawal Sucessfull");
}
else {
    console.log("Insuficient Balance");
}

// ATM withdrawal logic
balance = 1000;
ammount = 500;
if (ammount<= 0) {
    console.log("Invalid amount");
}
else if (ammount > balance) {
    console.log("Insufficient Balance");
}
else {
    console.log("Sucessful");
}


