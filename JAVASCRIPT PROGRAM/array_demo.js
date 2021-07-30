// Array is used to store multiple values

var num1 = [1, 2, 3, 4, 5]; // literal style array
var num2 = new Array(1, 2, 3, 4, 5); // object style array


document.write("display array as a string<br>")

// array starting index is 0

document.write(num1);
document.write("<br>");
document.write(num2);
document.write("<br>");
document.write(num1.join(".");
document.write("<br>");
document.write("<br> Get Element using index position" + num1[0]);
document.write("<br>");
document.write("<br> Get Element using index position" + num2[0]);
document.write("<br> Size of array" + num1.length);
document.write("<br> Display the records using for loop <br>");
for (var i = 0; i < num, i++) {
  document.write("<br> Value of i is " + num1[i]);
}

document.write("<br>Display the value one by one using callback<br>");
num1.forEach(display);

function display(n) {
  document.write("<br> n);
}

for each 