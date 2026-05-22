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


// 27 es6 map(key-value pairing)
// var myMap = new Map();
// myMap.set("name", "Jahid Rahman");
// myMap.set("age", 23);
// myMap.set("city", "Dhaka");
// myMap.set("class", "BSc in CSE");
// myMap.set("class", "MSc in CSE"); // same key te re-assign kora jay, but re-declare kora jay na
// myMap.set("class", "ssc");

// var map = new Map();
// map.set("key1", "Bangladesh");
// map.set("key2", "Nepal");
// map.set("key3", "Bhutan");

// console.log(map.values());
// console.log(map.keys());


// 28 es6 map (printing object using for of loop and for of loop with keys and values)
// var map = new Map();
// map.set("key1", "Bangladesh");
// map.set("key2", "Nepal");
// map.set("key3", "Bhutan");

// for (let [key, value] of map) {
//     console.log(`${key}: ${value}`);
// }

// for(let myvalue of map.values()){
//     console.log(myvalue);
// }

// for(let mykey of map.keys()){
//     console.log(mykey);
// }

// 29 es6 map()
// The more useful someone is, the more valuable he is. 
// delete method use kore map er kono key ke delete kora jay
// var myMap = new Map();
// myMap.set("key1", "Bangladesh");
// myMap.set("key2", "Nepal");
// myMap.set("key3", "Bhutan");

// myMap.delete("key2"); // key2 ke delete kore dibe
// myMap.delete("key3"); // key3 ke delete kore dibe

// map er sob key-value pair ke delete kore dibe
// myMap.clear();

// for(let myValue of myMap.values()){
//     console.log(myValue);
// }

// ES6 get method use kore map er kono key er value ke access kora jay
var myMap = new Map();
myMap.set("key1", "Bangladesh");
myMap.set("key2", "Nepal");
myMap.set("key3", "Bhutan");

// console.log(myMap.get("key1")); // output will be Bangladesh


// ES6 has method use kore map er kono key ache kina check kora jay

// if(myMap.has("key1")){
//     console.log("Key1 exists in the map.");
// }else{
//     console.log("Key1 does not exist in the map.");
// }





// 30 es6 set
// var mySet = new Set();
// mySet.add("Bangladesh");
// mySet.add("Nepal");
// mySet.add("Bhutan");
// mySet.add("Bangladesh"); // duplicate value add kora jay na, output will be Bangladesh, Nepal, Bhutan

// console.log(mySet);

// var mySet = new Set(["A", "B", "C", "D", "E", "F"]);
// console.log(mySet);

// 31 es6 set
var mySet = new Set();
mySet.add("Bangladesh");
mySet.add("Nepal");
mySet.add("Bhutan");
mySet.add("Maldives");

// mySet.clear(); // set er sob element ke delete kore dibe
// console.log(mySet); // output will be an empty set

// Delete method use kore set er kono element ke delete kora jay
// mySet.delete("Nepal"); // Nepal ke delete kore dibe
// console.log(mySet); // output will be Bangladesh, Bhutan, Maldives

// Size method use kore set er size ke check kora jay
// console.log(mySet.size); // output will be 4

// values method use kore set er sob element ke access kora jay
// console.log(mySet.values()); // output will be an iterable of set values

// set er spacific value ache kina check kora jay
// if(mySet.has("Bangladesh")){
//     console.log("Bangladesh exists in the set.");
// }else{
//     console.log("Bangladesh does not exist in the set.");
// }


// 32 es6 class
// theoritical concept of class


// 33 es6 create class and use
// abs()
// ireturns the absolte value of a number. 

// ceil()
// it returns a smallest integer value, greater than or equal to the given number.

// floor()
// it returns largest integer value, lower than or equal ot the given number.

// max()
// it returns maximum value of the given numbers.

// min()
// it returns minimum value of the given numbers.

// random()
// it returns a random number between 0(inclusive) and 1(exclusive).

// round()
// it returns closest integer value to the given number.

////////////////////
// class MyClass{
//     MyFun(){
//         console.log('first go to the ES6 directory.')
//     }

//     MyFun1(){
//         console.log('then hint into the terminal')
//     }

//     MyFun2(){
//         console.log('node main.js')
//     }

//     MyFun3(){
//         console.log('then you will see the output.')
//     }

//     MyFun4(){
//         console.log('That is the process.')
//     }

//     MyFun5(name){
//         console.log(name)
//     }
// }

// var obj = new MyClass;
// obj.MyFun();
// obj.MyFun1();
// obj.MyFun2();
// obj.MyFun3();
// obj.MyFun4();
// obj.MyFun5("Jahid"); // Using parameter.


// 34 es6 class constructor.
// class MyClass{
//     constructor(){
//         console.log("Hello I am constructor");
//     }
// }
// new MyClass();

// 35 es6 class constructor(parameter pass).
// class MyClass{
//     constructor(a,b){
//         console.log(a+b);
//     }
// }
// new MyClass(10,20);


// Parameterized constructor.
// class MyClass{
//     constructor(a,b){
//         this.firstNum = a
//         this.secondNum = b
//     }
//     add(){
//         let result = this.firstNum + this.secondNum;
//         console.log(result);
//     }
// }
// var obj = new MyClass(10,20);
// obj.add();


// 36 es6 static keyword
class MyClass{
    // hello(){
    static hello(){
        console.log('Hello World');
    }
}

// var obj = new MyClass();
// obj.hello();

MyClass.hello(); // static method







/////////////////////////////


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