let inputNum1 = '';
let inputNum2 = '';
let operator = '';
const previousNum = document.getElementById("prevNum");
const answer = document.getElementById("answer");
const clearAll = document.getElementById('clear');

clearAll.addEventListener('click', ()=>{
    answer.value = '';
    previousNum.value = '';
    inputNum1 = '';
    inputNum2 = '';
    operator = '';
});

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

function add(a, b){
    return a + b;
}

function setOperator(op){
    operator = op;
    previousNum.value = inputNum1 + '' +operator;
}
