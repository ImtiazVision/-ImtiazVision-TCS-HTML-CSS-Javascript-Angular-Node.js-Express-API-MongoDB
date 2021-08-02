// // Array is used to store multiple values

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

var num1 = [199, 200, 3, 400, 500];
document.write("<br>");
document.write(num1);
num1.push(6);
document.write("<br>");
num1.push(100);     // add the element 100 at the end of the array 
document.write("<br>");
num1.unshift(330); // add the element 330 at the beginning of the array
document.write("<br>");

document.write(num1);
num1.pop(); // remove the last element of the array
document.write("<br>");
num1.shift(); // remove the element at the beginning of the array

document.write("<br>");
document.write(num1);

var result1 = num1.find(e => e == 3);
var result2 = num1.find(e => e == 10);

var result1 = num1.find(function(e){
  return e == 3;
});

document.write("<br> Result1 is " + result1);
document.write("<br> Result1 is " + result2);

document.write(num);
document.write("<br>");
// 1st parameter index position, 2nd parameter number of element to delete
num1.splice(2)

