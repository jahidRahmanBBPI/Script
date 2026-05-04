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

const name="jahid rahman";;
const name = "rainbow"; // re-declare kora jay na, error dekhabe
console.log(name);


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