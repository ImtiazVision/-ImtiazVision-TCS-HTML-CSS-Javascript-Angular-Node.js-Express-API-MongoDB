var num1 = [10, 20, 30, 40, 50];

document.write("<br><br> The below array is now displaying on the browser as a string data type: <br><br> "+ num1);

// In javascript, arry is dynamic memory size whereas in C++, Java, it's static memory size.Therefore, we can always add elements inside the array after it has been initiated later on via the push() method.

num1.push(60);

document.write("<br>The array after adding the element 60<br>"+num1);
document.write("<br>The Push method add elements at the end of the array <br>");

num1.push(89);

document.write("<br>The array after adding the element 89<br>"+num1);
document.write("<br>To add element at the beginning of the array, we can use the Unshift method: <br>");

num1.unshift(34);

document.write("<br> The array after add the element 34 at the beginning of the array using unshift method: <br>"+ num1);

num1.pop(); // this will remove array element from the end of the array

document.write("<br>The array after removing the element 89 which happens to be the last element from the end of the array using pop method: <br>" + num1);

num1.shift(); // this will remove array element from the beginning of the array

document.write("<br>The array after removing the element 34 that happens to be the first element from the beginnig of the array using shift method: <br>"+ num1);

// Find function will take callback function as parameter and look for each element in the array. If the element is in the array, it will return it and otherwise it will return undefined. 

var result1 = num1.find(e=> e == 10);
var result2 = num1.find(e=> e == 3);

// Now we are showing the result of the find function on the browser window.

document.write("<br>The element 10 is available in the array. Hence, the result1 of the find function is: <br>" + result1);
document.write("<br>The element 3 is not available in the array. Hence, the result2 of the find function is:  <br>" + result2);