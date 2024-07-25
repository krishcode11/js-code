const name = "Krish"
const repoCount = 20

//console.log(name + repoCount + "Value");


//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('krishh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString =  gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "   krish  "
console.log(newStringOne.trim())

const url = "https://krish.com/krish%233krsaa"

console.log(url.replace('%233', '-'))

console.log(url.includes('krish'))

console.log(gameName.split('-'))