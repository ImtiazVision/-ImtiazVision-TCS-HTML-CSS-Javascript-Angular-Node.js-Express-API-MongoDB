// Normal function 
// With normal function, we can call the function before it's declaration. 

// display1();

// function display1() { 
//   alert("This is a normal function")
// }

// display1();


// Expression style function with function Name. 

// Here we are storing the function in a variable named dis2 and therefore if we invoke display2() just by it's name, it will not have any visibility. We have to call the function by it's stored variable name dis2. 

// var dis2 = function display2() { 
//   alert("This is expression style function");
// }

// display2(); We can't call the function by display2() because it's value is stored in some other variable named dis2. We have to call the function by it's stored variable name dis2. 

// dis2();

// The following function is an Expression style function without designated function name(annonymous function).

// dis3(); ERROR!!! With expression style function, we can't call the function before it's declaration and doing it will give us error 

// var dis3 = function () { 
//   alert("This is another expression style function without function name");
// }

// dis3();


// Callback style Function with 2 parameters
// Callback means that we are passing the function as a parameter to another function.

// function greeting(fname,callback){
//   // this callback parameter is behaving like a function here.
//   return "Welcome " + callback(fname);
// }
//   // this is a normal style function
//   function maleInfo(name){
//     return "Mr." + name;
//   }
//   // this is an expression style function
//   var femaleInfo = function(name){
//     return "Ms." + name;
//   }

// Here we are passing the maleInfo function as a parameter inside the greeting function and calling it. thus it is called a callback function. This maleInfo function is stored inside the callback variable of the greeting function's parameter.

// The first parameter John will be recieved by the first parameter inside the greeting function named fname. And 2nd parameter of greeting function named callback will receive the maleInfo function as a parameter.


// document.write(greeting(" John",maleInfo)); // passing the function name as a parameter
// document.write("<br><br>")
// document.write(greeting(" Mary",femaleInfo));
// document.write("<br><br>")
// document.write(greeting("Simran", function(name){
//   return " Ms. " + name;})); // passing the function body as a parameter 


// The following function is an example of the Arrow function. It is a part of ES6 feature. It is a shortcut syntax for expression style function. 

// This is expression style function 
// var dis1 = function() { 
//   document.write("Expression style function"); 
// }
// dis1();

// Here, we are storing the function of addition in a variable named addNumber.
var addNumber = function(a,b){ 
  var sum = a + b;
  return sum;
}
// Here, we are invoking that function stored in addNumber variable and displaying the sum of 2 numbers on the browser via the document.write function.

document.write("<br> Sum is " + addNumber(344,543));


// However, this is Arrow style function. The difference is that the function keyword is removed and replaced with () => an arrow and we don't need the curly braces.
var dis2 = () =>
  document.write("Arrow style function");

dis2();