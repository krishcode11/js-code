
function sayMyName(){
    console.log("h");
    console.log("f");
    console.log("g");
    console.log("g");
}
// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");

    }
    return `${username}just logged in`
}

// console.log(loginUserMessage("krish"))
// console.log(loginUserMessage())


function calculatecartPrice(val1, val2, ...num1){
    return num1

}

// console.log(calculatecartPrice(200, 3300, 4000 ))

const user = {
    username: "krish",
    price: 122
}
function handleObject(anyobject){
    console.log(`Udername is ${anyobject.username} and price is $ {anyobject.price}` )
}

// handleObject(user)
handleObject({
    username: "saca",
   price: 322
})

const myNewArray = [200, 332, 211]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
