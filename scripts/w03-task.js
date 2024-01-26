/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add(number1, number2){
    return number1 + number2
}
function AddNumbers()
{
    let number1 = Number(document.getElementById("add1").value);
    let number2 = Number(document.getElementById("add2").value);
    const sumOfNumber = Add(number1, number2);
    document.querySelector("#sum").value = sumOfNumber;
}

document.querySelector("#addNumbers").addEventListener('click', AddNumbers);
/* Function Expression - Subtract Numbers */
const Subtract = function(number1, number2){
    return number1 - number2;
}

const SubtractNumber = function(){
    const number1 = Number(document.querySelector("#subtract1").value);
    const number2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener('click', SubtractNumber);
/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => {
    return number1 * number2;
}

const MultiplyNumber = () => {
    const number1 = Number(document.querySelector("#factor1").value);
    const number2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = Multiply(number1, number2);
}

document.querySelector("#multiplyNumbers").addEventListener('click', MultiplyNumber);
/* Open Function Use - Divide Numbers */

const Divide = (dividend, divisor) => {
    return dividend / divisor;
}

const DivideNumber = () => {
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = Divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener('click', DivideNumber);

/* Decision Structure */

function getTotal()
{
    let subtotal = Number(document.querySelector("#subtotal").value)

    const club = Boolean(document.querySelector("#member").checked);

    if(club)
    {
        subtotal -= subtotal * 0.2;
    }

    document.querySelector("#total").innerHTML = `$${subtotal}`; 
}

document.querySelector("#getTotal").addEventListener('click', getTotal)


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10, 11, 12, 13];
document.querySelector("#array").textContent = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbers.filter((number) => number % 2 == 1 )

/* Output Evens Only Array */
document.querySelector("#evens").textContent = numbers.filter((number) => number % 2 == 0 )

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbers.reduce((a, b) =>  a + b )

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbers.map((item) => item * 2)
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbers.map((item) => item * 2).reduce((a,b) => a + b)
