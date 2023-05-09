let inputNum1 = '';
let inputNum2 = '';
const answer = document.getElementById("answer");
const clearAll = document.getElementById('clear');

clearAll.addEventListener('click', ()=>{
    answer.value = '';
});

function getNumber(num){
    if(inputNum1 === ''){
        inputNum1 += num;
        answer.value = inputNum1;
    }
    else{
        inputNum2 += num;
        answer.value = inputNum2;
    }
    
}

function add(a, b){
    return a + b;
}

function calculate(){

}
