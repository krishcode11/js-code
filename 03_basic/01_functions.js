
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
console.log(loginUserMessage())
