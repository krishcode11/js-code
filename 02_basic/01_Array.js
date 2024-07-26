// array

// const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr["1"])

// Array methods

// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// const iterator = colors.keys();
// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple


// const arrayLike = {
// 0: "a",
// 1: "b",
// length: 2,
// }
// console.log(Array.prototype.join.call(arrayLike, "+" ))

// const a = { length: 0.7 };
// Array.prototype.push.call(a);
// console.log(a.length)

// const fruits = ["Apple", "Banana"]
// const fruitsString = fruits.join(",")
// console.log(fruitsString);

// const fruits = ["Apple", "Banana"];
// console.log(fruits.indexOf("Banana"));

// const fruits = ["Apple", "Banana"];
// const newLength = fruits.push("Orange");
// console.log(fruits);
// // ["Apple", "Banana", "Orange"]
// console.log(newLength);
// // 3

// const fruits = ["Apple", "Banana", "Orange"];
// const removedItem = fruits.pop();
// console.log(fruits);
// // ["Apple", "Banana"]
// console.log(removedItem);
// // Orange


// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]
// const start = -3;
// const removedItems = fruits.splice(start);
// console.log(fruits);
// console.log(removedItems);

// const fruits = ["Apple", "Banana", "Strawberry", "Mango"]
// const start = 2;
// const removedItem = fruits.splice(start)
// console.log(fruits);
// console.log(removedItem)

// const fruits = ["Apple", "Banana"]
// const removedItem = fruits.shift()
// console.log(fruits)
// console.log(removedItem)

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana"]
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount)
// console.log(fruits);

// const fruits = ["Banana", "Mango"]
// const newLength = fruits.unshift("Strawberry")
// console.log(fruits)

// const fruits = ["Strawberry", "Banana", "Mango"]
// const start = fruits.indexOf("Banana")
// const deleteCount = 1
// const removedItem = fruits.splice(start, deleteCount)
// console.log(fruits)
// console.log(removedItem)

// const fruits = ["Apple", "Banana", "Strawberry"];
// const start = -2;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
// console.log(fruits);
// console.log(removedItems);

// const fruits = ["Apple", "Mango", "Cherry"];
// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const fruits = ["Apple", "Mango", "Cherry"];
// fruits.forEach((item, index, array) =>{console.log(item, index);
// });


// const fruits = ["Apple", "Banana", "Strawberry"]
// const moreFruits = ["Mango", "Cherry"];
// const combinedFruits = fruits.concat(moreFruits)
// console.log(combinedFruits);
// console.log(fruits);
// console.log(moreFruits);


// const fruits = ["Strawberry", "Mango"]
// const fruitCopy = [...fruits];
// const fruitCopy2 = Array.from(fruits);
// const fruitCopy3 = fruits.slice();
// const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits))
// console.log(fruitsDeepCopy);