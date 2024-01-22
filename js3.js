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
