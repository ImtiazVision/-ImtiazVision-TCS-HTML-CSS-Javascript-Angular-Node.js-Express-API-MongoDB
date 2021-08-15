// In JavaScript, only function name has to match and it doesn't matter whether number/type of parameter matches with the declarated function.This problem is resolved in typescript by using/declaring strict typing.

function add(a,b){
  // return a+b;
  console.log(a);
  console.log(b);
  console.log(a + b);
}

add(2,3);
add("Imtiaz","Rafiq");
add(100);
add();