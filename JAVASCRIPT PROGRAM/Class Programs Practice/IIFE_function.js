// Normal function

function display() { 
  document.write("<br>Normal function execute only if it is called/invoked by it's name. ");

  document.write("<br> We can call the function from script tag linked on the bottom of html page or from HTML page using events");
}

display();
// display();
// display();

// IIFE function
// Syntax is that the first part(function(){...}) is where we define the function and the second part i.e. ()  is where we call the function. The 2nd part is empty(no parameter) with a parenthesis().

(function() { 
  document.write("<br> IIFE function coding...")
})();

// IIFE function with passing parameter 

(function(a,b){
  var sum = a + b ;
  document.write("<br> Sum of 2 number is "+ sum);
}) (10,20); // here we are passing parameter (10,20) and subsequently calling the function