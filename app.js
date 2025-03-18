
// function addingtwoNum(numone , num2) 
// {
//     console.log("wash th clothes")
// }


// console.log(exchnage(pak , dollar))
 // exchnage dollar inton pkr through  function

//  let rate = prompt("Enter the rate of dollar");
//  let dollar = rate
//  let pak =prompt("Enter the amount in pakistani rupees"); 
//     function exchnage (pak , dollar){
//     return pak/dollar
//     }
//     console.log(exchnage(pak, dollar))


// let num1 = prompt("Enter the first number")
// let num2 = prompt("Enter the second number")

// function add (num1 , num2){
//     return num1 + num2
// }
// console.log(add( num1 , num2));

// function sub (num1 , num2){
//     return num1 - num2
// }
// console.log(sub( num1 , num2));

// function mul (num1 , num2){
//     return num1 * num2
// }
// console.log(mul( num1 , num2));

// function div (num1 , num2){
//     return num1 / num2
// }
// console.log(div( num1 , num2))

let num1 = prompt("Enter the first number")
let operator = prompt("Enter the operator")
let num2 = prompt("Enter the second number")

function calculator( num1 , num2 , operator)
{
    if(operator == "+"){
        console.log( num1 + num2)
    }
    else if(operator == "-"){
        console.log( num1 - num2)
    }
    else if(operator == "*"){
        console.log( num1 * num2)

    }
    else if(operator == "/"){
        console.log( num1 / num2) 
    }
    else{
        return "Invalid Operator"
    }
}
console.log(calculator(num1 , num2 , "+"))
console.log(calculator(num1 , num2 , "-"))
console.log(calculator(num1 , num2 , "*"))
console.log(calculator(num1 , num2 , "/"))


