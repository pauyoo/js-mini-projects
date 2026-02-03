
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement")
let site_age;

mysubmit.onclick = function(){

    site_age = mytext.value;
    site_age = Number(site_age);
    
    if (site_age>=18){
        resultElement.textContent = ("You can enter this site");
    }
    else if(site_age ==0){
        resultElement.textContent = ("you were just born");
    }
    else if(site_age <0){
        resultElement.textContent = ("Your age cant be below 0");
    }
    else if(site_age>=100){
        resultElement.textContent = ("You are too old")
    }
    else{
        resultElement.textContent = "(You must be 18+ to enter this site)";
    }
}

