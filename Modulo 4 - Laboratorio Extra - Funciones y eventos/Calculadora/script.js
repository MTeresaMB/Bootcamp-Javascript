let oper1 = null, 
    operation = null, 
    currentInput = '';


const screen = document.getElementById('result');
const numbers = document.getElementsByClassName("number");
const operations = document.getElementsByClassName("operator");


document.getElementById("equal").addEventListener('click', handleEquals);
document.getElementById("clear").addEventListener('click', clear);


for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', handleNumber, false);
}

for(let i = 0; i < operations.length; i++){
  operations[i].addEventListener('click', handleOperations, false);
}


function handleNumber(){
  currentInput += this.value;
  screen.value = currentInput;
}

function handleOperations(){
  operation = this.value;
  oper1 = currentInput;
  currentInput = '';
  screen.value = operation;
}

function handleEquals(){
  screen.value = calculate(oper1, operation, currentInput);
  currentInput = '';
  operation = null;
  oper1 = null;
}

function calculate(o1, op, o2){
  if(!isNaN(o1) || isNaN(o2)){
    switch(op){
      case '+': return parseFloat(o1) + parseFloat(o2); break;
      case '-': return parseFloat(o1) - parseFloat(o2); break;
      case '*': return parseFloat(o1) * parseFloat(o2); break;
      case '/': return parseFloat(o1) / parseFloat(o2); break;
    }
  }
}

function clear(){
  oper1 = null;
  operation = null;
  currentInput = '';
  screen.value = 0;
}
