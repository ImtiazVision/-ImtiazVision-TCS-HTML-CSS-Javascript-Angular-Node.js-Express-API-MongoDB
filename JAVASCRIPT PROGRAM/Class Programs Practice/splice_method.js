var num2 = [14,15,16,17,18,19,20,21,22,23];

document.write("<br>This is an sample Array: <br><br>");
document.write(num2);
document.write("<br>");
// For the splice method, 1st parameter is the index position of the element to be removed, 2nd parameter is the number of elements to remove, 3rd parameter is the new array element to be inserted
document.write("<br> As we know that we can remove the element of an array from the beginning using shift() method and remove from the end using pop() method. <br> However, if we want to remove any element from the middle of the array, we can use the splice() method.");

document.write("<br><br>For the splice method, 1st parameter is the index position of the element to be removed, 2nd parameter is the number of elements to remove.<br>");

document.write("<br> As we already know that array index starts from the index of 0");

num2.splice(2,1); // from 3rd indexed position, we remove 1 element. 

document.write("<br><br> The array after the deletion of 3rd indexed element i.e. 16 is removed using splice() method: <br><br>" + num2);

// The following code will remove element and insert a new element at the same time

num2.splice(1,1,100); // from 2nd indexed position, we remove 1 element and insert a new element 100 in place of deleted element at the same time.

document.write("<br><br> The array after the deletion of 2nd indexed element i.e. 15 and insertion of 100 at the same time is removed using splice() method: <br><br>" + num2);

// Moreover, we can say like from the 2nd indexed position, we remove 0 elements and insert  new elements like 200,330,441 in place of the indexed elements position. 

num2.splice(2,0,200,330,441);

document.write("<br><br> The array after adding 200,330,and 441 in place of the poited/mentioned index location of the array elements while deleting none of the elements:  <br><br>" + num2);