function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let firstNum;
let operator;
let secondNum;


const display = document.querySelector('div.display');

function addDigitToDisplay(val){
    if (display.textContent === "0"){
        display.textContent = val;
    } else {
        display.textContent += val;
    }
}

function addOperator(val){
    firstNum = Number(display.textContent);
    operator = val;
    disableOperators();
    display.textContent = "0";
}

function operate(num1, operator, num2){
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            alert("error");
    }
}



const digitButtons = document.querySelectorAll('button.digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        addDigitToDisplay(button.value);
    });
});

const operatorButtons = document.querySelectorAll('button.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        addOperator(button.value);
    });
});


function clear(){
    display.textContent = "";
}

function equal(){
    secondNum = Number(display.textContent);
    let result = operate(firstNum, operator, secondNum);
    display.textContent = result.toString();
    firstNum = result;
    enableOperators();
}

const clearButton = document.querySelector('button.clear');
clearButton.addEventListener('click', clear)

const operateButton = document.querySelector('button.equal');
operateButton.addEventListener('click', equal);

function disableOperators(){
    operatorButtons.forEach(button => button.disabled = true);
}

function enableOperators(){
    operatorButtons.forEach(button => button.disabled = false);
}
