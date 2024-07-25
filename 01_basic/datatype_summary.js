// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 23456713578n



// Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myoj = {
    name: "krish"
}

const myfunction = function(){
    console.log("hellow world");
}


//console.log(typeof scoreValue);





/////======================================

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "okkk"
let anothername = myYoutubename

//console.log(anothername);
//console.log(myYoutubename);


let user1 = {
    email: "user@gmail.com",
    upi: "user@dpl"
}

let userTwo = user1

userTwo.email = "krish@gmail.com"

console.log(user1.email);
console.log(userTwo.email);