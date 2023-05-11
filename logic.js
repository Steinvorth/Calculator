let inputNum1 = '';
let inputNum2 = '';
let operator = '';
let decAdded = false;
let negative = false;
const previousNum = document.getElementById("prevNum");
const answer = document.getElementById("answer");
const clearAll = document.getElementById('clear');
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const lastDel = document.getElementById("delete");
const negate = document.getElementById("negate");

negate.addEventListener('click', () =>{
    if(operator === ''){
        inputNum1 = toggleSign(inputNum1);
        previousNum.value = inputNum1;
        answer.value = inputNum1;
    }
    else{
        inputNum2 = toggleSign(inputNum2);
        previousNum.value = inputNum1 + '' + operator + '' + inputNum2;
        answer.value = inputNum2;
    }
});

//clear all button
clearAll.addEventListener('click', ()=>{
    answer.value = '';
    previousNum.value = '';
    inputNum1 = '';
    inputNum2 = '';
    operator = '';
    
});

//equal button
equals.addEventListener('click', ()=>{
    calc();
})

 //Deletes last character Added to the number
lastDel.addEventListener('click', ()=>{
    if(operator === ''){
        inputNum1 = del(inputNum1);
        previousNum.value = inputNum1;
        answer.value = inputNum1;
    }
    else if(inputNum2 !== ''){
        inputNum2 = del(inputNum2);
        previousNum.value = inputNum1 + '' + operator + '' + inputNum2;
        answer.value = inputNum2;
    }
    else{
        operator = '';
        previousNum.value = inputNum1;
    }
    
});

//Checks if there is a decimal on the inputNumber
function getDecimal(numIn){
    if(numIn.includes('.')){
        decimal.disabled = true;
    }
    else{
        decimal.disabled = false;
    }
}

//Delete Las Number Function
function del(num){
    if(num !== ''){
        num = num.slice(0,-1);
        console.log("new number1:" + num)
    }
    return num;
}

//Toggles negative sign on the number
function toggleSign(num){
    if(negative){
        negative = false;
        return num.substring(1);
    }
    else{
        negative = true;
        return '-' + num;
    }
}

//Gets Number input
function getNumber(num){
    if(operator === ''){
        inputNum1 += num;
        previousNum.value = inputNum1;
        answer.value = inputNum1;
        console.log("num 1:" + inputNum1);   
        getDecimal(inputNum1);     
    }
    else{        
        inputNum2 += num;
        previousNum.value = inputNum1 + '' + operator + '' + inputNum2;
        answer.value = inputNum2;
        console.log("num2: " + inputNum2)
        getDecimal(inputNum2);
    }
}

//Possible Math Functions
function add(a, b){
    const result = parseFloat(a) + parseFloat(b);
    console.log("sum: " + result)
    if(Number.isInteger(result)){
        return result;
    }else{
        return result.toFixed(3);
    }
}

function subtract(a, b){
    const result = parseFloat(a) - parseFloat(b);
    console.log("Difference: " + result);
    if(Number.isInteger(result)){
        return result;
    }else{
        return result.toFixed(3);
    }
    
}

function multiply(a, b){
    const result = parseFloat(a) * parseFloat(b);
    console.log("Product: " + result);
    if(Number.isInteger(result)){
        return result;
    }else{
        return result.toFixed(3);
    }
}

function divide(a, b){
    const result = parseFloat(a) / parseFloat(b);
    console.log("dividend: " + result);
    if(Number.isInteger(result)){
        return result;
    }else{
        return result.toFixed(3);
    }
}

function modulus(a ,b){
    const result = parseFloat(a) % parseFloat(b);
    console.log("modulous: " + result);
    return result;
}

//Takes operator as input for function calc later 
function setOperator(op){
    
    if(answer.value !== ''){
        inputNum1 = answer.value;
        inputNum2 = '';
    }
    if(inputNum1 && inputNum2){
        calc();
        inputNum1 = answer.value;
        inputNum2 = '';
    }

    decimal.disabled = false;

    operator = op;
    previousNum.value = inputNum1 + '' +operator;

    if(operator === "="){
        inputNum2 = '';
    }
}

//Calculates answer depending on the operator selected
function calc (){
    let result = 0;
    switch (operator) {
        case '+':
            result = add(inputNum1, inputNum2);
            break;
        case '-':
            result = subtract(inputNum1, inputNum2);
            break;
        case '×':
            result = multiply(inputNum1, inputNum2);
            break;
        case '÷':
            result = divide(inputNum1, inputNum2);
            break;
        case '%':
            result = modulus(inputNum1, inputNum2);
            break;
        default:
            result = 0;
    }

    answer.value = result.toString();
    inputNum1 = '';
    inputNum2 = '';
    operator = '';
    decimal.disabled = false;
}
