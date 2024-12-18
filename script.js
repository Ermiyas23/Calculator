let add = function(a , b){
    return a + b;
};

let subtract = function(a , b){
    return a - b;
};

let multiply = function( a , b){
    return a * b;
}

let division = function(a , b){
    if(b === 0){
        return 'divisible by zero is error';
    }else{
        return a / b;
    }
    
};

let operate = function(operator,num1,num2){
    switch (operator) {
        case "+":
            return add(num1 , num2);
        case '-':
            return subtract(num1 , num2);
        case '*':
            return multiply(num1 , num2);
        case '/':
            return division( num1 , num2);
        default:
            break;
    }
}

let btnNum = document.querySelectorAll('button');
let btnDisplay = document.querySelector('#item1')
let selectOperator = null;
let num1 = null;



btnNum.forEach(btn => {
    btn.addEventListener('click' ,(e)=>{
        let textButton = e.target.textContent;
        if(btn.id === 'clear'){
            btnDisplay.value = '';
            num1 = null;
            selectOperator = null;

        }else if(!isNaN(textButton)){
            btnDisplay.classList.add('btnColor');
           btnDisplay.value += textButton;
            if(selectOperator === null){
                num1 = parseFloat(btnDisplay.value);
            }

        } else if (textButton === '+' || textButton === '-' ||
            textButton === '*' || textButton === '/') {
            if (num1 !== null) {
            selectOperator = textButton;
            btnDisplay.value = ''; 
            }
        }else if(textButton === '='){
            if(num1 !== null && selectOperator !== null){
                btnDisplay.classList.add('btnColor');
                let num2 = parseFloat(btnDisplay.value);
                let result = operate(selectOperator , num1 ,num2);
                btnDisplay.value = Math.round(result); 
                num1 = result;
                selectOperator = null
           }       
       }
      
    })

});
