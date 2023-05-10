let inputNum1 = '';
let inputNum2 = '';
let operator = '';
const previousNum = document.getElementById("prevNum");
const answer = document.getElementById("answer");
const clearAll = document.getElementById('clear');
const equals = document.getElementById("equals");

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

//Gets button input
function getNumber(num){
    if(operator === ''){
        inputNum1 += num;
        previousNum.value = inputNum1;
        answer.value = inputNum1;
        console.log("num 1:" + inputNum1)
    }
    else{
        inputNum2 += num;
        previousNum.value = inputNum1 + '' + operator + '' + inputNum2;
        answer.value = inputNum2;
        console.log("num2: " + inputNum2)
    }
    
}

//Possible Functions
function add(a, b){
    const result = parseFloat(a) + parseFloat(b);
    console.log("sum: " + result)
    return result;
}

function subtract(a, b){
    const result = parseFloat(a) - parseFloat(b);
    console.log("Difference: " + result)
    return result;
}

function multiply(a, b){
    const result = parseFloat(a) * parseFloat(b);
    console.log("Product: " + result);
    return result;
}

function divide(a, b){
    const result = parseFloat(a) / parseFloat(b);
    console.log("dividend: " + result);
    return result;
}

function modulus(a ,b){
    const result = parseFloat(a) % parseFloat(b);
    console.log("modulous: " + result);
    return result;
}

//Takes operator as input for function calc later 
function setOperator(op){
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
        case '*':
            result = multiply(inputNum1, inputNum2);
            break;
        case '/':
            result = divide(inputNum1, inputNum2);
            break;
        case '%':
            result = modulus(inputNum1, inputNum2);
            break;
        default:
            result = 0;
    }
    inputNum1 = result.toString();
    inputNum2 = '';
    operator = '';
    answer.value = inputNum1;
}
