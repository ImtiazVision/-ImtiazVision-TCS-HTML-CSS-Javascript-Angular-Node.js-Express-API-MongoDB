// This is called normal function 
function display() { 

}
// Here we are calling the function
display();

// Now this is the class declaration
function Employee(){
  this.id = 100;
  this.name = "John";
  this.dis = function(){
    document.write("Id is: "+this.id);
    document.write("Name is: "+this.name);
  }
}

var emp = new Employee();
emp.dis();
Employee.prototype.age=21;
Employee.prototype.info=function(){ 
  document.write("This in info function");
}