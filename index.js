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