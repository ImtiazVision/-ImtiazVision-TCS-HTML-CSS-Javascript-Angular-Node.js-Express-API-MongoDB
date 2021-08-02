// ES5 style object creation is

function Employee() {
  this.role = "employee";
  var fname = "Homistan";
  this.age = "25";
  this.job = "Software Engineer";
  this.salary = "100000";
  this.address = "New York City";

  let age = 21;

  this.dis = function() {
    document.write("This is employee behavior");
  };
    let dis1 = function() {
      document.write("This is express style function");
    }

    function dis3() {
      document.write("This is normal function");

      var emp1 = new Employee();  
      document.write(emp1.fname);
      emp1.dis();

