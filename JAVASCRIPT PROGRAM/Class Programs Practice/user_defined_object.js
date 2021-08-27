// ES5 style object creation
// The following function named Employee is a class and as we know that class is a blueprint for creating objects.
function Employee () { 
  // this is a keyword which refer to the current object
  this.id = 100; // this is called instance property and it can be accessed outside the class within the object. Remember that class is a blueprint for creating objects.Therefore, we can access the instance property of the class later on within the object via memory creation. 
  
  var name = "John Doe"; // act as a local variable and not a part of object
  
  let age = 24;  // local variable and not a part of the object 

  // If we want to display the function, use the following code.
  this.dis = function () {
    document.write("This is employee behaviour");
  }
  let dis1 = function() { 
    document.write("This is expression style function");
  }
  function dis3() {
    document.write("This is normal function");
  }
}

// Now we are defining the objects and creating memories for the objects.

var emp1 = new Employee(); // memory for the emp1 gets created.

document.write(emp1.id); // Here we are calling the id property of the object.

document.write(emp1.name); // Here we are calling the name property of the object.

document.write(emp1.age); // Here we are calling the age property of the object.

