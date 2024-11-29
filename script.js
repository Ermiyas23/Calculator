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

let show = operate('*',8 ,8);
console.log(show)