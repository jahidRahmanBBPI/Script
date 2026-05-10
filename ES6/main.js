// console.log('Hello, ES6!');

// Basic Syntax

// Strict Mode
// 'use strict';
var name = "Jahid Rahman";
MyName();
function MyName() {
    // name = "Jahid Rahman";
    // console.log(name);
}

// 5 Spread Operator
// let poorCountry = ['Bangladesh', 'Nepal', 'Bhutan'];
// let richCountry = ['USA', 'UK', 'Germany'];
// let allCountry = [...poorCountry, ...richCountry];

// another wahy to write
// let allCountry = poorCountry.concat(['USA', 'UK', 'Germany']);

// another way to write
// let allCountry = [...poorCountry, 'USA', 'UK', 'Germany'];
// console.log(allCountry);

// 6 Without Spread Operator
// let poorCountry = ['Bangladesh', 'Nepal', 'Bhutan'];
// let richCountry = ['USA', 'UK', 'Germany'];
// richCountry.push(...poorCountry); //output will be ['USA', 'UK', 'Germany', 'Bangladesh', 'Nepal', 'Bhutan']
// richCountry.push(poorCountry); // output will be ['USA', 'UK', 'Germany', ['Bangladesh', 'Nepal', 'Bhutan']]
// console.log(richCountry);

// 7 Rest Parameter
// function CaulculateSum(a,b,...numbers) {
//     let sum = 0;
//     for(let i of numbers) {
//         sum += i;
//     }
//     console.log(`Sum: ${sum}`);
// }
// CaulculateSum(1, 2, 3, 4, 5); // output will be Sum: 15

// 8 Dynamic Function
// var name=function(nameValue){
//     return nameValue;
// }
// console.log(name('Jahid Rahman'));

// 9 ES6 Variable [var dia re-declare and re-assign kora jay, let dia re-declare kora jay na but re-assign kora jay, const dia re-declare o re-assign kora jay na]

// var name="jahid rahman";;
// name = "rainbow"; // re-assign kora jay
// console.log(name);

// const name="jahid rahman";;
// name = "rainbow"; // re-assign kora jay na, error dekhabe
// console.log(name);

// var name = "Jahid Rahman";
// var name = "Rainbow"; // re-declare kora jay, error dekhabe na
// console.log(name);

// let name="jahid rahman";;
// let name = "rainbow"; // re-declare kora jay na, error dekhabe
// console.log(name);

// const name="jahid rahman";;
// const name = "rainbow"; // re-declare kora jay na, error dekhabe
// console.log(name);

// 10 Variable Scope
// var name = "global scope"; // global scope

// function myFunction() {
//     // var name = "local scope"; // local scope
//     console.log(name); // Output: local scope
// }

// myFunction();


// 11 Variable Hoisting
// name = "Jahid Rahman"; // Variable assignment before declaration
// console.log(name);
// var name; // Variable declaration (hoisted to the top)


// 12 Simple For Loop
// var i;
// for (i = 0; i < 5; i++) {
//     console.log(i + " " + "Jahid Rahman");
// }


// 13 Simple For of Loop (array er element gulo ke iterate kore)
// let names = ['Jahid', 'Rahman', 'Rainbow'];
// for (let name of names) {
//     console.log(name);
// }


// 14 & 15 Object Basic Concept
// var person = {name: 'Jahid Rahman', age: 23, city: 'Dhaka', student: true};

// console.log(person.name);
// console.log(person['name']);

// nested object 
// var personPro={
//     shirt:{color:'red',
//             size:'M',
//             price:"500"
//         },

//     swatter:{color:'blue',
//             size:'L',
//             price:"1000"
//         },
//     face:{
//         similing:"yes",
//         eye:"black",
//         chosma: "no"
//         }
//     }


// console.log(personPro.shirt.color); // output will come in nested array.


// 16 For in loop (props means properties in js)
// var person = {name: 'Jahid Rahman', age: 23, city: 'Dhaka', student: true};

// for (var props in person) {
    // console.log(props + ": " + person[props]); (output will be name: Jahid Rahman, age: 23, city: Dhaka, student: true)
    // console.log(props); (output will be name, age, city, student)
// }


// 17 decision making
// var person = {name: 'Jahid Rahman', age: 23, city: 'Dhaka', student: true};
// if (person.age > 18) {
//     console.log("You are an Man.");
// }
// else if (person.age > 12) {
//     console.log("You are a teenager.");
// }
// else if (person['age'] < 22) {
//     console.log("You have responsibility.");
// }
// else {
//     console.log("You are a child.");
// }


// 18 simple function and parameterized functions
// Simple function
// function myFunction() {
//     var x= 10;
//     var y= 20;
//     var z = x + y;
//     console.log(z);
// }
// myFunction(); // output will be 30


// Parameterized function
// function myFunction(x, y) {
//     var z = x + y;
//     console.log(z);
// }
// myFunction(20, 20);


// 19 rest parameters functions
// function calculateSum(...numbers) {
//     // console.log(numbers); // output will be an array of numbers [1, 2, 3, 4, 5]
//     console.log(numbers[3]); // output will be 4, x[0] will be 1, x[1] will be 2, x[2] will be 3, x[4] will be 5
// }
// calculateSum(1, 2, 3, 4, 5);

// 20 function returns
// function MyFunction() {
//     return "Hello, World!";
// }
// console.log(MyFunction()); // output will be Hello, World!


// function funOne(){
//     return 20;
// }

// function funTwo(){
//     return 30;
// }

// console.log(funOne() + funTwo()); // output will be 50

// 21 anonymous functions(re-assign kora jay, but re-declare kora jay na)
// var myFunction = function(...x) {
//     return x;
// }
// console.log(myFunction(1, 2, 3, 4, 5)); // output will be an array of numbers [1, 2, 3, 4, 5]


// var myFun = function(){
//     return "Hello, World!";
// }
// var myFun = function(){
//     return "Hello, ES6!";
// }
// console.log(myFun()); // output will be Hello, ES6!

// 22 arrow function
// var myArrow= () => {
//     return "Hello, ES6!";
// }   
// myArrow(); // output will be Hello, ES6!

// pass parameter in arrow function
// var add = (a, b) => {
//     return a + b;
// }
// console.log(add(5, 3)); // output will be 8

// rest parameter in arrow function
// var calculateSum = (...numbers) => {
//     let sum = 0;
//     for (let i of numbers) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(calculateSum(1, 2, 3, 4, 5)); // output will be 15


// var myArrow = (...x) => {
//     return x;
// }
// console.log(myArrow(1, 2, 3, 4, 5)); // output will be an array of numbers [1, 2, 3, 4, 5]


// var myArrow = () =>{
//     return "Hello, ES6!";
// }
// console.log(myArrow()); // output will be Hello, ES6!


// 23 ES6 Simple Arrays(like foreach loop)
// var myArray = ["A", "B", "C"];
// var myArrayPro = new Array("A", "B", "C", "D", "E", "F");
// // console.log(myArray[0]);

// for(let item of myArrayPro){
//     console.log(item);
// }

// 25 Multidimensional Arrays
// var bangladesh = ["Dhaka", "Chittagong", "Khulna"];
// var nepal = ["Kathmandu", "Pokhara", "Lalitpur"];
// var bhutan = ["Thimphu", "Paro", "Punakha"];

// var asia = [bangladesh, nepal, bhutan];
// console.log(asia[0][1]);


// 26 array de-structuring
// var countries = ["Bangladesh", "Nepal", "Bhutan"];
// var[a,,c] = countries;
// console.log(c);











// Example of let and const
// let name = 'Alice';
// const age = 30;
// console.log(`Name: ${name}, Age: ${age}`);

// // Example of arrow functions
// const add = (a, b) => a + b;
// console.log(`Sum: ${add(5, 3)}`);

// // Example of template literalsconst greeting = `Hello, ${name}! You are ${age} years old.`;
// console.log(greeting);  

// // Example of destructuringconst person = { firstName: 'Bob', lastName: 'Smith' };
// const { firstName, lastName } = person;
// console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

// // Example of classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// const person1 = new Person('Charlie', 25);
// console.log(person1.greet());