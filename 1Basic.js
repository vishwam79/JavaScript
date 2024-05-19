// Variables
// These are containers for storing data values.
let name = "John";
const age = 30;
var isStudent = true;








// Data Types
// Different kinds of values we can use.
let message = "Hello"; // String
let count = 10; // Number
let isFound = true; // Boolean
let fruits = ["apple", "banana", "orange"]; // Array
let person = { name: "Alice", age: 25 }; // Object









let x = 5;
let y = 3;

// Arithmetic Operators
// Math operations we can do with numbers.
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division



// Comparison Operators
// Ways to compare two values.
console.log(x > y); // Greater than
console.log(x < y); // Less than
console.log(x === y); // Equal to
console.log(x !== y); // Not equal to




// Logical Operators
// Combining multiple conditions.
console.log(x > 0 && y > 0); // AND
console.log(x > 0 || y > 0); // OR
console.log(!isFound); // NOT









let num = 5;

// If-else
// Checking conditions and deciding what to do.
if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}







// Switch-case
// Choosing one action from many options.
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
  default:
    console.log("It's another day");
}







// For loop
// Doing something a set number of times.
for (let i = 0; i < 5; i++) {
  console.log(i);
}







// While loop
// Doing something while a condition is true.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}






// Do-while loop
// Doing something at least once, then while a condition is true.
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);







// Function declaration
// A way to create reusable code blocks.
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));






// Function expression
// Another way to create functions.
let sayHello = function () {
  return "Hello!";
};
console.log(sayHello());






// Arrow function
// A shorter way to write functions.
let double = (num) => num * 2;
console.log(double(3));








// Normal function
// Declaring a simple function using 'function' keyword.
function normal() {
  let username = "vishwam";
  console.log(this.username); // 'this' refers to global object
}

normal();







// Function expression
// Another way to declare a function.
let normal2 = function () {
  let username = "vishwam";
  console.log(username); // local scope variable
};

normal2();








// 'this' keyword
// Refers to the object that is calling the function.
const user = {
  name: "vishwam",
  price: 999,
  welcome: function () {
    console.log(`${this.name}, welcome to my website`);
  },
};
user.welcome();







// Arrow function
// Arrow functions have a simpler syntax and no 'this' binding.
const Arrow = () => {
  console.log("this is arrow function");
};

Arrow();







const user2 = {
  name: "pata nahi",
  age: 00,
  welcome: () => {
    console.log("kya haal chal ");
  },
};

user2.welcome();








// map function
// Creates a new array by applying a function to each element of the original array.
let arr = [2, 4, 6, 20];

let hello = arr.map((index) => {
  console.log(index * 2);
});









// filter function
// Creates a new array with elements that pass a test.
let hello2 = arr.map(double);
console.log(hello2);

let each = arr.forEach((index) => {
  console.log(index + 5);
});

let filterelements = arr.filter((index) => {
  return index > 4;
});

console.log(filterelements);








const users = [
  {
    name: "vishwam",
    age: 24,
  },
  {
    name: "ram ",
    age: 30,
  },
  {
    name: "vaibhav",
    age: 18,
  },
  {
    name: "aman",
    age: 22,
  },
];

let filteredUsers = users.filter((index) => {
  if (index.age > 20) {
    return index.name;
  }
});

console.log(filteredUsers);











// Hoisting
// JavaScript moves declarations to the top of the scope.
console.log(hoistedVar); // undefined because of hoisting
var hoistedVar = "This is a hoisted variable";

hoistedFunction(); // This will work because function declarations are hoisted

function hoistedFunction() {
  console.log("This is a hoisted function");
}

// let and const are not hoisted in the same way as var
try {
  console.log(hoistedLet); // ReferenceError
} catch (e) {
  console.log(e);
}
let hoistedLet = "This is a let variable";
