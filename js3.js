//21/11 Session

// Error handling

// try {
//   console.log(myName);
// } catch (error) {
//   console.log("Something went wrong"), error;
// } finally {
//   // guranteed to run even if error
//   console.log("this always runs");
// }

// scope
// In JS the intial scope is the global scope (window, global, self or globalThis object)
// Each function creates its own internal scope - local scope - creating a scop chain

// added nodemon to run instead of node

// Global scope - Not used ideally.

iAmBad = true; // this is a global variable
var whatAmI = 0; // scoped to the module

// function demo() {
//   var myName = "Graeme"; // function scope

//   console.log(iAmBad, myName);

//   function inner() {
//     var age = 37;
//     console.log(iAmBad, whatAmI, myName, age);
//   }

//   inner();
// }

// demo();

// function demo() {
//   var myName = "Graeme"; // function scope
//   var age;

//   console.log(iAmBad, myName);

//   function inner() {
//     var age = 37;
//     console.log(iAmBad, whatAmI, myName, age);
//   }

//   inner();
// }

// demo();

// in this example we have 2 age variables within the object but both can be called and return the right values as invoking both functions
// function one() {
//   var age = 37;
//   console.log(age);

//   function two() {
//     var age = 35;
//     console.log(age);
//   }
//   two();
// }

// one();

// let

// Here the console log must be within the function scope to reun. if placed below/outwith then this wont work
// function one() {
//   let age = 37; // block scope - begins with curly and ends with curly and only data within those curlies can be accessed from the block scope and not outwith
//   console.log(age);
// }

// one();

//Example/Explaination
// var foo = "I'm global";
// var bar = "So am I";
// function a() {
//   var foo = "I'm local, the previous 'foo' didn't notice a thing";
//   var baz = "I'm local, too";
//   function b() {
//     var foo = "I'm even more local, all three 'foos' have different values";
//     baz = "I just changed 'baz' one scope higher, but it's still not global";
//     bar = "I just changed the global 'bar' variable";
//     xyz = "I just created a new global variable";
//   }
// }

// Hoisting - allows yo uto console log before the function. Delcarations get hoisted, expressions dont
// console.log(add(1, 2));
// function add(x, y) {
//   return x + y;
// }

// ES6+

//start with const - if i need to reassign use let - if i really need to hoist use var - never use global

// function bank() {
//   let balance = 1000;

//   balance = 2000;

//   console.log(balance);
// }

// bank();

// function bank() {
//   const balance = 1000;

//   balance = 2000;

//   console.log(balance);
// }

// bank();

// in this example, because name is within an object it can then be changed otuwith that object and run and works.
// const me = { name: "Graeme" };

// me.name = "Bob";

// console.log(me.name);

// fat arrow functions - only work on expressions

// const add = function (x, y) {
//   return x + y;
// };

// //as fat arrow function

// const add = (x, y) => {
//   return x + y;
// };

// 3 ways to write fat arrow functions
// if 1 need (), if 2 dont need (), if 3 need () but prettier will just put them in () anyways when save

// const myFun = () => {};

// const myFun = (x) => {};

// const myFun = (x, y) => {};

// Default function parameters
// const add = (x = 0, y = 0) => {
//   // pre-define function value to 0. if you fail to send a value, it will default to 0 as seen in 2nd console log
//   return x + y;
// };
// console.log(add(1, 2));
// console.log(add(1));

// template strings

// const me = { name: "Graeme", age: 37, happy: true, location: "Fenwick" };

// // const str =
// //   "His name is " +
// //   me.name +
// //   " and his age is " +
// //   me.age +
// //   " and his happy status is " +
// //   me.happy +
// //   " and his location is " +
// //   me.location;

// // template example below. cleaner to use/read
// // const str2 = `His name is ${me.name} and his age is ${me.age} and his happy status is ${me.happy} and his location is ${me.location}`;

// // console.log(str);
// // console.log(str2);

// const makeStr = (name, age, location) => {
//   return `His name is ${name}, his age is ${age} and his location is ${location}`;
// };

// console.log(makeStr("Graeme", 37, "Fenwick"));

// string metods

// Includes- allows you to determine whether the name starts/ends with aletter or word and return true/false

// const name = "Graeme";

// console.log(name.startsWith("G"));
// console.log(name.endsWith("G"));

//padding- not common. lets you make string certain length

// const name = "Graeme";

// console.log(name.padStart(10, "."));
// console.log(name.padEnd(10, "."));

//Trim - removes whitespace
// const name = "Graeme             ";

// console.log(name);
// console.log(name.trimEnd());

// Destructuring - allows you to create an object with multiple properties

// const person1 = { name: "Graeme", age: 37, happy: true, location: "Fenwick" };

// const { name, age, happy, location } = person1;

// console.log(
//   `His name is ${name}, his age is ${age}, his happy status is ${happy} and his location is ${location}`
// );

// Below example allows you to shorten the name of each property and also replace it with values should a value not be found
// const person1 = {
//   about: { name: "Graeme", age: 37, happy: true },
// };

// const {
//   name: n = "No Name Given",
//   age: a = "No age provided",
//   happy: h = "No happy status found",
//   location: l = "No location found",
// } = person1.about;

// console.log(
//   `His name is ${n}, his age is ${a}, his happy status is ${h} and his location is ${l}`
// );

//also works for arrays
// const cols = ["red", "green", "blue", "yellow"];

// const [col1, col2, col3, col4] = cols;

// console.log(col1);
// console.log(col2);

// Array Improvements

//flat array - Not something commonly used

// const multiDimArray = [1, 2, 3, [4, 5, 6], 7, 8, 9];

// console.log(multiDimArray.flat());

// Reduce -

// const price = [100, 200, 300, 400];

// console.log(
//   price.reduce((acc, value) => {
//     return acc + value;
//   })
// );

// console.log(
//   price.reduce((acc, value) => {
//     return acc * value;
//   })
// );

// console.log(
//   price.reduce((acc, value) => {
//     return acc / value;
//   })
// );

// at -

// const price = [100, 200, 300, 400];

// console.log(price.at(-1)); // having a negative allows you to get the last element in the array

// Object property shorthand - if key matches the variable then only right it once

// const name = "Graeme";

// const obj = { name };

// console.log(obj);

// dymanic keys - bit abstract

// const obj = {};

// for (let i = 0; i < 50; i++) {
//   obj[`item_${i}`] = Math.random();
// }

// console.log(obj);

// Object method shorthand - removing function from writing and reducing words/code

// const obj = {
//   add(x, y) {
//     return x + y;
//   },
// };

// console.log(obj.add(1, 2));

// Rest and Spread - Copy arrays, put things into arrays.
// Rest - gathers incoming
// Spread - Spreads ougoing
// Both have same syntax - identifier

//object example
// const obj = {
//   name: "Graeme",
//   age: 37,
//   happy: true,
//   location: "Fenwick",
// };

// const copy = { ...obj, favCols: "blue" };

// console.log(obj, copy);

// //array example
// const arr = [1, 2, 3, 4, 5, 6];
// const arrCopy = [...arr, 7, 8, 9];

// console.log(arrCopy);

//Rest Operator - Below example restrives all the values not included in the original array. Also works for objects
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [item1, item2, item3, item4, item5, item6, ...allTheRest] = arr;
// console.log(allTheRest);

// passing by value - allows you to create a value, copy it and then change it and return all values. This doesnt work with objects
// let name = "Graeme";
// let copy = name;
// name = "Bob";
// console.log(name, copy, name === copy);

//Passing by reference - shows behaviour for objects.
// const obj = { name: "Graeme" };

// const copy = obj;

// copy.name = "Bob";

// console.log(obj, copy);

//Deep Clone
//Example below used JSON to convert to string and back toobject to then create copy and provide both sets of data back in return value.
// const obj = { name: "Graeme", location: { city: "Fenwick" } };

// let copy = JSON.parse(JSON.stringify(obj)); //  converts to JSON string and back to object can use https://www.npmjs.com/package/rfdc as a library instead.

// obj.location.city = "Kilmarnock";
// obj.name = "Bob";

// console.log(obj, copy);

//Short circut
// const one = 100;
// const two = 200;
// const three = 300;

// if (one && two && three) {
//   // only evaluates the "three" as if it gets here then the first 2 must have passed.
//   console.log("All are true");
// }

//
// const data = true;
// const answer = data && "Data is true";
// console.log(answer);
