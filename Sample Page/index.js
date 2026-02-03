//  
console.log("Hello");
console.log("My name is Paul");

// window.alert("This is an alert");
// window.alert("Hello");


// document.getElementById("myhi").textContent="hello";
// document.getElementById("myp").textContent="My name is paul";

// Variables: declearation and assignment

let age = 25;
let networth = 1000;
let gpa = 4.33;

console.log("I am ${age} years old");
console.log("My cgpa is ${gpa}")
console.log("my current networth is $${networth}")
// To print variable & data type
let firstname = "paul";
let email = "paulayodele04@gmail.com"

console.log(typeof firstname);
console.log(firstname);
console.log(email);


// Booleans 
let online = false;
let forsale = true;
let availability = true;

console.log(`paul is online: ${online}`);  //use backsticks for this
console.log(`Is this car for sale: ${forsale}`);
console.log(`product is available: ${availability}`)

let fullname = "Atoyebi Paul";
let newage = 25;
let student = false;

//* document.getElementById("p1").textContent = `Your name is ${fullname}`;
// document.getElementById("p2").textContent = `You are ${newage}`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

/// Arithmetic Operators 
let waec_students = 20

waec_students = waec_students + 1;
waec_students = waec_students -2;
waec_students = waec_students ** 2;  //raised to power 2
// waec_students = waec_students % 2;  // modulus

waec_students += 1;
waec_students -= 1;
waec_students /= 2;
waec_students **=2;
// waec_students %= 2; // modulus

// increament and decreasement Operator 
waec_students ++;
waec_students --;

console.log(waec_students);

/*
Operator Precedence
1. Parenthesis()
2. Exponents
3. Multiply and add
4. Add and subtract
*/
// Increament & Decreament Operator
inc = 2;
inc ++;
inc --;

console.log(inc);

// Operator Operation
let result = 1 + 2 * 3 + 4 ** 3;

console.log(result);

// Accepting User Input in Javascript
// let username; 

// username = window.prompt("What's your username");

// console.log(username);

// Accepting Inputs by creating HTML Textbox
let username;

// document.getElementById("mysubmit").onclick = function(){
 //   username = document.getElementById("mytext").value;
//    document.getElementById("myh1").textContent = `hello ${username}`
// }

// Changing data type & YTyper conversion
// let experience = window.prompt("What is your years of experience?");
//  experience = Number(experience);
//  age+=1;

//  console.log(experience, typeof experience);

let a = "rice"
let b = "bean"
let c = "dodo"

a = Number(a);
b = String(b);
c - Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(b, typeof b);


/// CONSTANT & Math PI
const PI = 3.14;
let radius ;
let circrumfrence;



document.getElementById("mysubmit").onclick = function () {

    let radius = document.getElementById("mytext").value;
    radius = Number(radius);

    let circumference = 2 * Math.PI * radius;

    document.getElementById("myh3").textContent =
        circumference.toFixed(2) + " cm";
};

// Math Operations
let p = 3.55
let q = 3.55
let r = 16.55


q = Math.round(q);  //round up
p = Math.floor(p);  // round down
r = Math.log(r);    // log 
s = Math.sin(r);    //sin
let max = Math.max(p,q,r,s);   // for min and max

console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(max);


// RANDOM NUMBER GENERATOR
let randmNum = Math.random();

console.log(randmNum);


const min = 50
const max_ = 100

let r_num = Math.floor(Math.random() * (max_ - min)) + max_;

console.log(r_num);


// CONDITIONAL STATEMENTS
let new_age = 19;

if(new_age > 18){
    console.log("You are old enough");
}
else {
    console.log("denied");
}


let time = 8;

if (time >= 8){
    console.log("Perfect time")
}
else {
    console.log("you are late")
}

// Using booleans
let stud = true;

if(stud){
    console.log("He is a student")
}
else{
    console.log("He is not a student")
}

// IF ELSE
let license_age = 25;
let has_licesese = false;

if(license_age >= 16){
    console.log("He is old enough to drive");

    if(has_licesese){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet");
    }
}

else{
    console.log("He is NOT old enough to drive")
}


site_age =20;

if (site_age>=18){
    console.log("You can enter this site");
}
else if(site_age ==0){
    console.log("you were just born");
}
else if(site_age <0){
    console.log("Your age cant be below 0");
}
else if(site_age>=100){
    console.log("You are too old")
}
else{
    console.log("You must be 18+ to enter this site")
}


const myCheckBox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const vervebtn = document.getElementById("vervebtn");
const opaybtn = document.getElementById("opay");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subResult.textContent = "You are Subscribed"
    }
    else{
        subResult.textContent = "You are NOT Subscribed"
    }

    if(visabtn.checked){
        paymentResult.textContent = "You are paying with Visa"
    }
    else if(mastercardbtn.checked){
        paymentResult.textContent = "You are paying with Master Card"
    }    
    else if(vervebtn.checked){
        paymentResult.textContent = "You are paying with Verve"
    }
    else if(opaybtn.checked){
        paymentResult.textContent = "You are paying with Opay"
    }
    else{
        paymentResult.textContent = "You MUST select a payment type"
    } 
    
}

