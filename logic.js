let num1 = null;
let num2 = null;
let operator = null;

//DOMS for Buttons
const sum = document.getElementById('add-btn');
const sub = document.getElementById('sub-btn');
const number1 = document.getElementById("num1-btn");
const number2 = document.getElementById("num2-btn");
const equals = document.getElementById("equals-btn");

//functions for operators and modifications
const displayResult = (result) => {
    document.getElementById("result").innerHTML = result;
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) =>{
    return num1 - num2;
};

//Operator Button Toggle 

const toggleActive = (button) =>{
    const buttons = [sum, sub];
    buttons.forEach(btn =>{
        if(btn === button){
            btn.classList.add("active");
        }
        else{
            btn.classList.remove("active");
        }
    });
}

//EventListeners for buttons
number1.addEventListener("click", () => {
    if (num1 === null) {
        num1 = parseInt(number1.getAttribute("data-value"));
    } 
    else {
        num2 = parseInt(number1.getAttribute("data-value"));
    }
    displayResult(num1);
    toggleActive(null);
});

number2.addEventListener("click", () => {  
    if (num1 === null) {
        num1 = parseInt(number2.getAttribute("data-value"));
    } 
    else {
        num2 = parseInt(number2.getAttribute("data-value"));
    }
    toggleActive(null);
});

sum.addEventListener("click", () => {  
    operator = "+";
    toggleActive(sum);
});

sub.addEventListener('click', () =>{
    operator = "-";
    toggleActive(sub);
});

equals.addEventListener("click", () => {  
    if (num1 !== null && num2 !== null && operator === "+") {    
        const result = add(num1, num2);    
        displayResult(result);  
    }
    else if(num1 !== null && num2 !== null && operator === "-"){
        const result = subtract(num1, num2);
        displayResult(result);
    }
    toggleActive(null);
});