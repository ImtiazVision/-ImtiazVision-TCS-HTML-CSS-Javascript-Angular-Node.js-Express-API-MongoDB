// function sum(a,b){ 
//   let total = 0;
  
//   return a+b;
// }
// console.log(arguments);
// document.write("Here we are calling sum function 😄" + sum(1,2,3,5,4));

// // Expression style function
// var dis1 = function() { 
//   document.write("Expression style function<br>");
// }
// dis1();
// // Arrow style function 
// var dis2 = () => document.write("<br>Arrow style function");
// dis2();

// var addNumber = function(a,b){ 
//   var sum = a + b;
//   return sum;
// }
// document.write("<br><br>The sum of a and b is: "+ addNumber(3,5));

// document.write("<br><br>We are calling the addNumber function again and sum of a & b is: "+addNumber(3,3));

// // arrow function by default return values without using the return keyword
// var sumOfNumber = (a,b) => a+b;
// document.write("<br><br>Using Arrow function: Sum of a and b is : "+sumOfNumber(8,8));

// Arrow function with multiple line statement. With Arrow function, the func
var findLargest = (a,b) => { 
  if(a>b){ return "a is largest" }
  else { return "b is largest" }
}
document.write("<br>Find the largest😄: "+findLargest(5,6));



// // // Normal Function
// // function display(){ 
// //   alert("This is a normal function😃");
// // }
// // // here we are calling that function display()
// // // display();

// // // Expression style function with function name. Here we are storing this function inside a variable dis2
// // var dis2 = function display2(){ 
// //   alert("This is an expression style function😃");
// // }
// // // The variable name dis2 is now behave like a function.below is the invocation of the above function through the variable dis2
// // // dis2();


// // // Expression style function with function without name i.e. anonymous function.
// // var dis3 = function() { 
// //   alert("This is an expression style anonymous function😃");
// // }
// // // calling the above function
// // dis3();


// // Callback function
// function greeting(fname,callback){ // here callback is a variable and for understanding purpose we have used the same name as the function name because it is now behaving like a function 
//   return "Welcome " + callback(fname);
// }
// var maleInfo = function(name) { 
//   return "Mr. " + name;
// }
// var femaleInfo = function(name) { 
//   return "Ms. " + name;
// }

// // here we will pass the callback function maleInfo as a parameter to the function greeting
// document.write(greeting("John",maleInfo)); 

// // Hoisting: moving the function declaration at the top of the code
// function walk() { 
//   // alert("I am walking");
//   document.write("<br><br>Excuse me!! <br><br> I am walking here");
// }
// // calling the function
// walk();

// // calling the function before creation will give us Uncaught ReferenceError: run is not defined. 
// // run();

// const run = function() { 
//   document.write('run');
// };

// // Calling it after it's declaration will give us desired output
// run();



// // // normal function

// // function display() {
// //   alert("I am a function");
// // }
// // display();

// // // Expression function

// // var dis2 = function display2() {
// //   alert("I am an expression stype function");
// // }
// // // we can't call it by function name
// // // display2();

// // dis2();
// // // Expression style function with function without name anonymous
// // var dis3 = function() {
// //   alert("I am a function with no parameter");
// // }
// // dis3();

// // function greetings(fname, callback) {
// //   return "Welcome" + callback(fname);
// // }
// // // Normal Style
// // function maleInfo(name) {
// //     return "Hello Mr. " + name + "!";
    
// //   }
// // // expression style
// // var femaleInfo = function(name) {
// //     return "Hello Miss" + name + "!";
// // }

// // document.write(greetings("John", maleInfo));
// // document.write("<br/>");
// // document.write(greetings("Mary", femaleInfo));
// // document.write("<br/>");
// // document.write(greetings("Mike", function(name) {
// //     return "Hello Mr. " + name + "!";
// // }));

// // // Arrow function is a shortcut syntax for expression style functions

// // var dis1 = function() {
// //   document.write("Expression Function");
// // }

// // dis1();

// // var addNumber = function(a,b) {
// //   var sum = a + b;
// //   return sum;
// // }

// // document.write("<br> sum is " + addNumber(1,2));


// // // Arrow style function 
// // var dis2 = () => document.write("<br/> This is called arrow function");
// // dis2();
// // // arrow function by default return without return keyword
// // var sumOfNumber = (a,b) => a + b;
// // document.write("<br> Sum of 2 number is " + sumOfNumber(100,2));


// // // Arrow function with multiple line statement

// // var findLargestNumber = (a,b,c) => {

// //   // var largestNumber = a > b ? a : b;
// //   // largestNumber = largestNumber > c ? largestNumber : c;
// //   // return largestNumber;
// //   if (a > b) {
// //     return "a is largest";
// //   } else if (b > c) {
// //     return "b is largest";
// //   } else {
// //     return "c is largest";
// // }
// // }
// // document.write("<br> find the largest" + findLargestNumber(1,2,3));


// // function display() {
// //   document.write("<br> Normal function execute only if we call");
// //   document.write("<br> we can call the function from script or from html using eve");
// // }
// //   display();
// //   display();
// //   display();

// //   // IIFE function
// //   // Syntax 
// //   (function(a,b) {
// //     var sum = a + b;
// //     document.write("<br> sum of two number is" + sum);
// //   })(10,20);

// // IIFE (immediate Invoke function expression)