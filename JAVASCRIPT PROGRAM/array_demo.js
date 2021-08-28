// Array is used to store multiple values
// var num1 = [10,20,30,40,50,60]; // literal style array declaration
// var num2 = new Array(10,20,30,40,50,60,70,80); // object style array declaration via memory allocation/creation

// document.write("<br>Display array as string: <br><br>");
// document.write(num1 + "<br><br>");
// document.write(num2 + "<br><br>");
// document.write(num1.join("-") + "<br><br>"); // we were able to join the array elements with a delimiter "-" because the elements are of type string

// // Array starts from the index position of 0 and ends at arraySize-1

// document.write("<br> Get Element using index position 0 : "+num1[0])
// document.write("<br> Get Element using index position 1 : "+num1[1])
// document.write("<br> Size on the array1 is : "+num1.length);

// document.write("<br>Display the record using for loop: <br>");
// for(var i =0; i < num2.length; i++) { 
//   document.write("<br>Value of i is:  "+ num2[i]);
// }


// ES6 provides a great alternatives for loop that is forEach which takes callback function as an argument and loops through the array
// document.write("<br><br>Display the value of num1 array using callback");
// num1.forEach(display); // Here we are calling the display function repeatedly until the num1 array is empty

// function display(n) {  // this is the function constructor
//   document.write("<br><br>Using forEach function: Value of each num1 array's element is: "+ n);
// }
// // display(n)   // this is the calling of function 

// document.write("<br><br> Another way to retrieve the value using ES5 style function keyword usage <br>");
// num1.forEach(function(n) {
//   document.write("<br><br>Using forEach feature: Value of each num1 array's element is: "+ n);
// });

// document.write("<br>Another way to retrieve the array elements values using ES6 style arrow function");

// num2.forEach(n => 
//   document.write("<br> Each array elements value is using arrow function: "+n));


// var num1 = [1, 2, 3, 4, 5]; // literal style array
// var num2 = new Array(1, 2, 3, 4, 5); // object style array


// document.write("display array as a string<br>")

// // array starting index is 0

// document.write(num1);
// document.write("<br>");
// document.write(num2);
// document.write("<br>");
// document.write(num1.join(".");
// document.write("<br>");
// document.write("<br> Get Element using index position" + num1[0]);
// document.write("<br>");
// document.write("<br> Get Element using index position" + num2[0]);
// document.write("<br> Size of array" + num1.length);
// document.write("<br> Display the records using for loop <br>");
// for (var i = 0; i < num, i++) {
//   document.write("<br> Value of i is " + num1[i]);
// }

// document.write("<br>Display the value one by one using callback<br>");
// num1.forEach(display);

// function display(n) {
//   document.write("<br> n);
// }

// var num1 = [199, 200, 3, 400, 500];
// document.write("<br>");
// document.write(num1);
// num1.push(6);
// document.write("<br>");
// num1.push(100);     // add the element 100 at the end of the array 
// document.write("<br>");
// num1.unshift(330); // add the element 330 at the beginning of the array
// document.write("<br>");

// document.write(num1);
// num1.pop(); // remove the last element of the array
// document.write("<br>");
// num1.shift(); // remove the element at the beginning of the array

// document.write("<br>");
// document.write(num1);

// var result1 = num1.find(e => e == 3);
// var result2 = num1.find(e => e == 10);

// var result1 = num1.find(function(e){
//   return e == 3;
// });

// document.write("<br> Result1 is " + result1);
// document.write("<br> Result1 is " + result2);

// document.write(num);
// document.write("<br>");
// // 1st parameter index position, 2nd parameter number of element to delete
// num1.splice(2)

