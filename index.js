let num1
let num2
let operator




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

/*Tests*/
console.log(`1+1: ${add(1, 1)}`);
console.log(`10-5: ${subtract(10, 5)}`);
console.log(`5-10: ${subtract(5, 10)}`);
console.log(`5*5: ${multiply(5, 5)}`);
console.log(`-5*5: ${multiply(-5, 5)}`);
console.log(`5*0: ${multiply(5, 0)}`);
console.log(`100/10: ${divide(100, 10)}`);
//Should throw divide by zero error and return -1
console.log(`10/0: ${divide(10, 0)}`);
function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b===0){
        console.error("Divide By 0 Error")
        return -1
    }else{
        return a/b
    }
}

//TESTS
console.log(`1+1: ${add(1,1)}`)
console.log(`10-5: ${subtract(10,5)}`)
console.log(`5-10: ${subtract(5,10)}`)
console.log(`5*5: ${multiply(5,5)}`)
console.log(`-5*5: ${multiply(-5,5)}`)
console.log(`5*0: ${multiply(5,0)}`)
console.log(`100/10: ${divide(100,10)}`)
//Should throw divide by zero error and return -1
console.log(`10/0: ${divide(10,0)}`)