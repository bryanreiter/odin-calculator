let num1 = null
let num2 = null
let operator = null
let decimalClicked = false; //track whether we are dealing with decimals

//Set up numerical buttons to listen for clicks
let buttons = document.getElementsByClassName('calc-button')
for(let i=0;i<buttons.length;i++){
    if(buttons[i].classList.contains('special')){
        buttons[i].addEventListener('click', handleSpecialClick)
    }else{
        buttons[i].addEventListener('click', handleNumClick);
    }
}

function handleSpecialClick(event){
    //specials don't get shown, but instead have a special function (add, subtract, multiply, divide, sign-flip, percentage, clear, etc)
    let special = event.target.textContent
    switch (special) {
        case '±': //flip sign
            console.log(`User Pressed Plus Or Minus: ${special}`)
            break;
        case `%`: //convert to decimal
            console.log(`User Pressed Percent: ${special}`)
            break;
        case `÷`: //divide
            console.log(`User Pressed Divide: ${special}`)
            operator = special
            break;
        case `×`: //multiply
            console.log(`User Pressed Multiply: ${special}`)
            operator = special
            break;
        case `−`: //subtract
            console.log(`User Pressed Subtract: ${special}`)
            operator = special
            break;
        case `+`: //addition
            console.log(`User Pressed Add: ${special}`)
            operator = special
            break;
        case `=`: //equals
            console.log(`User Pressed Equals: ${special}`)
            if(num1!==null && operator !==null && num2!==null){
                calculateResult()
            }
            break;
        case `AC`: //clear
            console.log(`User Pressed Clear: ${special}`)
            clearCalculator()
            break;
        case `.`:
            console.log(`User Pressed Decimal Point: ${special}`)
            decimalClicked = true;
        default:
            break;
    }
}

//Handle the click event and update the display
function handleNumClick(event){
    let number = event.target.textContent;
    if (decimalClicked) { //check if decimal was clicked
        if (operator === null) { //check if operator pressed, if not we are on num1
            num1 = num1 === null ? parseFloat('0.' + number) : parseFloat(num1 + '.' + number); //if num1 isn't entered, prepend 0.
        } else {
            num2 = num2 === null ? parseFloat('0.' + number) : parseFloat(num2 + '.' + number); //if num2 isn't entered yet, prepend 0.
        }
        decimalClicked = false;
    } else {
        if (operator === null) {
            num1 = num1 === null ? parseFloat(number) : parseFloat(num1 + number);
        } else {
            num2 = num2 === null ? parseFloat(number) : parseFloat(num2 + number);
        }
    }
    console.log(`User Pressed Number: ${number}`);
}

function calculateResult(){
    let result;
    switch (operator) {
        case `÷`:
            result = num1 / num2
            result = parseFloat(result.toFixed(2))
            break;
        case `×`:
            result = num1 * num2
            result = parseFloat(result.toFixed(2))
            break;
        case `−`:
            result = num1 - num2
            result = parseFloat(result.toFixed(2))
            break;
        case `+`:
            result = num1 + num2
            result = parseFloat(result.toFixed(2))
            break;
        case null:
            break;
        default:
            break;
    }
    console.log(`Result: ${result}`)
    //reset state
    num1 = result
    num2 = null
    operator = null
}

function clearCalculator(){
    num1=null
    num2=null
    operator=null
    console.log('Calculator cleared')
}

//Update display with button pressed
function updateDisplay(input){
    let display = document.getElementById('calc-display')
}


function operate(num1, num2, operator){
    //calls calculator functions
}

/*Calculator Functions*/
/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between the two numbers.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides two numbers.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of the two numbers.
 * @throws {Error} If the divisor is 0.
 */
function divide(a, b) {
    if (b === 0) {
        console.error("Divide By 0 Error");
        return -1;
    } else {
        return a / b;
    }
}