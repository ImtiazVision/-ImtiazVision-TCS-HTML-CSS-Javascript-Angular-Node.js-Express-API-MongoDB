let numb1:number[]=[10,20,30,40,50,60,70,80,90,100];
console.log(numb1);

console.log("*****************************");
console.log("Using in loop will give us the index number of the element");
console.log("*****************************");


// in loop provieds the index of an array element 
for (let i in numb1) { 
  console.log("index is "+ i);
}

console.log("*****************************");
console.log("Using of loop will give us the value of the element");
console.log("*****************************");


// of loop will give us directly the value of the element 
for (let n of numb1) {
  console.log("Value of the element is:  "+n);      
} 
