// // Object creation using ES6 in typescript 
// class Employee {
//     id=100;
//     name="Jonah";
//     age=24;

//     dis():void {
//         console.log("Id is: "+ this.id);
//         console.log("Name is: "+ this.name);
//         console.log("Age is: "+ this.age);
//     }
// } 

// let emp1 = new Employee();
// // calling dis() function
// emp1.dis();

// let emp2 = new Employee();
// // calling dis() function
// emp2.dis();

// parameterized constructor with parameters
// class Employee {
//   // instance variables
//   private id:number;  // this means we can't access this through object.This variable is secure and it's private. This private option is not available in Javascript
//   name: string;
//   age:number; 
//   constructor(id: number, name: string, age: number) { // local variables
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
//   dis(): void {
//     console.log("Id is: "+ this.id);
//     console.log("Name is: "+ this.name);
//     console.log("Age is: "+ this.age);
//   }

// }
// // when calling the function, the parameter data type must match with the initial function parameter data type
// let emp1 = new Employee(101, "Jonah", 24);
// let emp2 = new Employee(102, "Mike", 22);

// emp1.dis();
// emp2.dis();
// emp1.id=100;  can't change the value of id becuase it is private
// console.log(emp1.id);  can't access the id because it is private


// Constructor Shortcut initialization function

class Employee {
  // We can use access specifiers(private/public) with parameter variable to make the variable as instance variable
  constructor(private id: number,public name: string, public age?: number) { // local variables
  }
  dis(): void {
    console.log("Id is: " + this.id);
    console.log("Name is: " + this.name);
    console.log("Age is: " + this.age);
  }

}

let emp1 = new Employee(101, "Jonah", 24);
let emp2 = new Employee(102, "Mike", 22);
let emp3 = new Employee(103,"Imtiaz");

emp1.dis();
emp2.dis();
console.log(emp1.name);
console.log(emp1.age);