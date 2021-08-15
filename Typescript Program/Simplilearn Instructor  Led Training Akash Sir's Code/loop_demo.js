var numb1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numb1);
console.log("*****************************");
console.log("Using in loop will give us the index number of the element");
console.log("*****************************");
// in loop provieds the index of an array element 
for (var i in numb1) {
    console.log("index is " + i);
}
console.log("*****************************");
console.log("Using of loop will give us the value of the element");
console.log("*****************************");
// of loop will give us directly the value of the element 
for (var _i = 0, numb1_1 = numb1; _i < numb1_1.length; _i++) {
    var n = numb1_1[_i];
    console.log("Value of the element is:  " + n);
}
