//  TASK 1
const firstValue = document.getElementById('first_value');
const secondValue = document.getElementById('second_value');
const operatorVal = document.getElementById('operator');
const resCalc = document.getElementById('res_calc');

let rc = 0;

function calc() {
    const fv = +firstValue.value;
    const sv = +secondValue.value;

    switch (operatorVal.value) {
        case '+':
            rc = fv + sv;
            resCalc.textContent = rc;
            break;
        case '-':
            rc = fv - sv;
            resCalc.textContent = rc;
            break;
        case '*':
            rc = fv * sv;
            resCalc.textContent = rc;
            break;
        case '/':
            rc = fv / sv;
            resCalc.textContent = rc;
            break;
    }
}

//  TASK 2
const inputValue = document.getElementById('item_input');
const sumItem = document.getElementById('sum_item');
const arrayRes = document.getElementById('array_result');

function isNumber(x){
    if(x === ''){
        return false;
    }
    const numX = +x;
    if(isNaN(numX)){
        return false;
    } else {
        return true;
    }
}

let arr = [];
arrayRes.textContent = arr.value;
const iv = inputValue;

function addItem() {
if(isNumber(iv.value)){
    arr.push(+iv.value);
    arrayRes.textContent = JSON.stringify(arr);
   sumItem.textContent = Number(sumItem.textContent) + Number(iv.value);
}else {
    alert('Wrong value!');
}
}

//  TASK 3
const inputNumber = document.getElementById('number_input');
const outReverse = document.getElementById('reverse_result');

function reverseNumber() {

    if (inputNumber.value < 0) {
        alert('Wrong value!');
        return
    }
    if(isNumber(inputNumber.value)) {
        let res = 0;
        let inNum = inputNumber.value;
        let lastDigit;
        while (inNum !== 0){
            lastDigit = inNum % 10;
            res = res * 10 + lastDigit;
            inNum = Math.floor(inNum / 10);
        }
       outReverse.textContent = res;
    }else {
        alert('Wrong value!');
    }
}









