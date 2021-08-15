var num1 = [10,20,30,40,50,60];  // Literal style array declaration 

var num2 = new Array(20,30,40,60,90,100); // Memory Creation

document.write("Display array as a string <br>");
document.write("<br>");

// In javascript, we can display array on the browser as a string. In Javascript, array displayed on the browser is considered as a string. Other languages does not support this.

document.write(num1);
document.write("<br>");
document.write("<br>");
document.write(num2);

document.write("<br>");
document.write("<br>");
document.write(num1.join("-"));
document.write("<br><br> Get Element using the index position " + num1[0]);
document.write("<br><br> Get Element using the index position " + num1[1]);
document.write("<br><br> Size of array is: " + num1.length);
document.write("<br><br> Display the array using for loop: ");

for(var i=0; i<num1.length; i++) {
  document.write("<br><br> Value of i is  "+num1[i] + " and index is " + i);
}


// Here, we are displaying the value of array element using new ES6 feature forEach() method with the help of callback funtion  without using for loop.
document.write("<br><br> Here, we are displaying the value of array element using new ES6 feature forEach() method with the help of callback function  without using for loop.<br><br> Display the value one by one using callback: ");

num1.forEach(display); // here display is working as a callback function.

function display(n){
  document.write("<br><br> Value of n is: " + n);
  }

document.write("<br><br> Another way to retrieve the value <br>");

// ES5 style 
num1.forEach(function(n){ 
  document.write("<br><br> Value of n is: " + n);

}) 
// ES6 style replacing function() with () => that is called arrow function 
document.write("<br><br> Another way to retrieve the value of using Arrow function:  <br>");

num1.forEach(n=>document.write("<br> Value of n is: "+ n));