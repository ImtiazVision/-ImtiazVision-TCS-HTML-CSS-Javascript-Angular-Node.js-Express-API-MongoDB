// normal function

function display() {
  alert("I am a function");
}
display();

// Expression function

var dis2 = function display2() {
  alert("I am an expression stype function");
}
// we can't call it by function name
// display2();

dis2();
// Expression style function with function without name annonymous
var dis3 = function() {
  alert("I am a function with no parameter");
}
dis3();