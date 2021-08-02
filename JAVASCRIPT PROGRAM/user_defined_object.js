// // ES5 style object creation is

// function Employee() {
//   this.role = "employee";
//   var fname = "Jonathan";
//   this.age = "25";
//   this.job = "Software Engineer";
//   this.salary = "100000";
//   this.address = "New York City";

//   let age = 21; // local variable is not a part of object 

//   this.dis = function() {
//     document.write("This is employee behavior");
//     document.write("<br/>id is" + this.id); 
//     document.write("<br/>role is" + this.role);
//     document.write("<br/>fname is" + fname); // local variable is not a part of object
//   };
//     let dis1 = function() {
//       document.write("This is express style function");
//     }

//     function dis3() {
//       document.write("This is normal function");

//       var emp1 = new Employee();  
//       document.write(emp1.fname);
//       emp1.dis();

// ES5 parameter constructor(function) concept

// function Employee(id, name, salary) {
//   this.id = id;
//   this.name = "John Doe";
//   this.role = "employee";
//   this.age = "25";
//   this.job = "Software Engineer";
//   this.salary = "100000";

//   this.dis = function() {
//     document.write("This is employee behavior");
//     document.write("<br/>id is" + this.id);
//     document.write("<br/>name is" + this.name);
//     document.write("<br/>role is" + this.role);
//     document.write("<br/>age is" + this.age);
//     document.write("<br/>job is" + this.job);
//     document.write("<br/>salary is" + this.salary);
//   }
// }

// var emp1 = new Employee(); // memory created

// emp1.dis(); // we can call behavior
// alert(emp1.id); // we can access property

// var emp1 = new Employee(100,"John",10000); // memory created
// var emp2 = new Employee(100,"Mike",10400); // memory created
// emp1.dis(); // we can access property
// emp2.dis(); // we can access property


// ES6 style object creation 

// class Employee {
//   id = 100;
//   name = "John Doe";
//   salary = 120000;  // not required this keyword 

//   dis() {   // not required this keyword   
//     document.write("This is employee behavior");
//     document.write("<br/>id is" + this.id); // to access we have to use this keyword
//     document.write("<br/>name is" + this.name);
//     document.write("<br/>salary is" + this.salary);
//   }
// }

// let emp1 - new Employee(); // memory created
// emp1.dis(); // we can call behavior

// WE will use ES6 in Angular 


// class Employee {
//   id = 100;
//   name = "Raj"
//   salary = 12000;       // not require this keyword. 
//   dis() {             // not require this keyword 
//     document.write("<br/>id is " + this.id);   // to access we have to use this keyword
//     document.write("<br/>name is " + this.name);
//     document.write("<br/>salary is " + this.salary);
//   }
// }
// let emp1 = new Employee();
// emp1.dis();
// let emp2 = new Employee();
// emp2.dis();

// Constructor example
class Employee {
  constructor(id, name="Unknown", salary=100000) {
    this.id = id;
    this.name = name;
    this.salary = salary; // initialize salary
  }
  dis() {
    document.write("<br/>id is " + this.id);
    document.write("<br/>name is " + this.name);
    document.write("<br/>salary is " + this.salary);
  }
} 

let emp1 = new Employee(100,"John",10000);
let emp2 = new Employee(200,"Mike",10400);
let emp3 = new Employee(200,"Mike");
let emp4 = new Employee();
emp1.dis();
emp2.dis();
emp3.dis();
emp4.dis();

// literal style object creation from ES5 style syntax

let emp1 = { id: 100, name: "Ramesh", age: 21 };
document.write("<br/>id is " + emp1.id)
document.write("<br/>Name is " + emp1.name)
document.write("<br/> age is " + emp1.age)