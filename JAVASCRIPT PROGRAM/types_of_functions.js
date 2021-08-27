



// // normal function

// function display() {
//   alert("I am a function");
// }
// display();

// // Expression function

// var dis2 = function display2() {
//   alert("I am an expression stype function");
// }
// // we can't call it by function name
// // display2();

// dis2();
// // Expression style function with function without name anonymous
// var dis3 = function() {
//   alert("I am a function with no parameter");
// }
// dis3();

// function greetings(fname, callback) {
//   return "Welcome" + callback(fname);
// }
// // Normal Style
// function maleInfo(name) {
//     return "Hello Mr. " + name + "!";
    
//   }
// // expression style
// var femaleInfo = function(name) {
//     return "Hello Miss" + name + "!";
// }

// document.write(greetings("John", maleInfo));
// document.write("<br/>");
// document.write(greetings("Mary", femaleInfo));
// document.write("<br/>");
// document.write(greetings("Mike", function(name) {
//     return "Hello Mr. " + name + "!";
// }));

// // Arrow function is a shortcut syntax for expression style functions

// var dis1 = function() {
//   document.write("Expression Function");
// }

// dis1();

// var addNumber = function(a,b) {
//   var sum = a + b;
//   return sum;
// }

// document.write("<br> sum is " + addNumber(1,2));


// // Arrow style function 
// var dis2 = () => document.write("<br/> This is called arrow function");
// dis2();
// // arrow function by default return without return keyword
// var sumOfNumber = (a,b) => a + b;
// document.write("<br> Sum of 2 number is " + sumOfNumber(100,2));


// // Arrow function with multiple line statement

// var findLargestNumber = (a,b,c) => {

//   // var largestNumber = a > b ? a : b;
//   // largestNumber = largestNumber > c ? largestNumber : c;
//   // return largestNumber;
//   if (a > b) {
//     return "a is largest";
//   } else if (b > c) {
//     return "b is largest";
//   } else {
//     return "c is largest";
// }
// }
// document.write("<br> find the largest" + findLargestNumber(1,2,3));


// function display() {
//   document.write("<br> Normal function execute only if we call");
//   document.write("<br> we can call the function from script or from html using eve");
// }
//   display();
//   display();
//   display();

//   // IIFE function
//   // Syntax 
//   (function(a,b) {
//     var sum = a + b;
//     document.write("<br> sum of two number is" + sum);
//   })(10,20);

// IIFE (immediate Invoke function expression)