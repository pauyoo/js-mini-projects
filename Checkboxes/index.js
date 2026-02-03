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

