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
    return a / b;
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

let btnNum = document.querySelectorAll('.item2');
let btnDisplay = document.querySelector('#item1')

btnNum.forEach(btn => {
    btn.addEventListener('click' ,(e)=>{
        let textButton = e.target.textContent;
        btnDisplay.value += textButton
        if(btn.id === 'clear'){
            btnDisplay.value = ''
        }
    })
    
});