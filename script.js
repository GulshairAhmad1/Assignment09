// No 1

let myVar = 5;
console.log(myVar)

// No 2

let myString =  "Hello, world!";
alert(myString)

// No 3

let num1 = 5;
let num2 = 10;
let userNum = prompt("Enter a number");

console.log(num1+num2+parseFloat(userNum));

// No 4

let myBoolean = true;

if(myBoolean){
    console.log("It's true!")
} 
else{
    console.log("It's false!")
}

// No 5

const number = 17;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// No 6
const str01 = "Hello";
const str02 = "world!";
const result = str01 + " " + str02;
console.log(result);


//  No 7

const num001 = 7;
const num002 = 3;
const output = num1 * num2;
console.log(output);

//  No 8

const input = prompt("Enter password:");
if (input === "password") {
  alert("Access granted");
} else {
  alert("Access denied");
}

//  No 9

const num10 = parseInt(prompt("Enter the first number:"));
const num20 = parseInt(prompt("Enter the second number:"));
const num30 = parseInt(prompt("Enter the third number:"));

let largest = num10;

if (num20 > largest) {
  largest = num20;
}

if (num30 > largest) {
  largest = num30;
}

console.log("The largest number is " + largest);


//  NO 10

const str10 = prompt("Enter the first string:");
const str20 = prompt("Enter the second string:");

if (str10 === str20) {
  alert("The strings are equal");
} else {
  alert("The strings are not equal");
}

// End