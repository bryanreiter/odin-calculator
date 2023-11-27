let num1
let num2
let operator

//Set up numerical buttons to listen for clicks
let buttons = document.getElementsByClassName('calc-button')
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', handleNumClick);
}

//Handle the click event and update the display
function handleNumClick(event){
    let buttonVal = parseInt(event.target.textContent)
    updateDisplay(buttonVal)
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