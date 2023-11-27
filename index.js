let num1
let num2
let operator

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
            break;
        case `×`: //multiply
            console.log(`User Pressed Multiply: ${special}`)
            break;
        case `−`:
            console.log(`User Pressed Subtract: ${special}`)
            break;
        case `+`:
            console.log(`User Pressed Add: ${special}`)
            break;
        case `=`:
            console.log(`User Pressed Equals: ${special}`)
            break;
        case `AC`:
            console.log(`User Pressed Clear: ${special}`)
        default:
            break;
    }
}

//Handle the click event and update the display
function handleNumClick(event){
    let buttonVal = parseInt(event.target.textContent)
    updateDisplay(buttonVal)
    console.log(`User Pressed: ${buttonVal}`)
}

//Update display with button pressed
function updateDisplay(input){
    let display = document.getElementById('calc-display')
    display.textContent = input;
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