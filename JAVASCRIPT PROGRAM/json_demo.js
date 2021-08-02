let emp1 = {id:100,name:"John",age:25,result:true};
document.write("Object in literal format <br>");
document.write("<br>ID is"+ emp1.id);
document.write("<br>Name is"+ emp1.name);
document.write("<br>Age is"+ emp1.age);
document.write("<br>Result is"+ emp1.result);

// convert object literal to JSON string
// We have to convert javaScript object to JSON string
// Stringify method converts the object to JSON string
let empString = JSON.stringify(emp1);
// then we have to convert string to json
let empJson = JSON.parse(empString);

// Our section end project will require knowledge of converting data to json format 
document.write("<br>ID is" + empJson.id);
document.write("<br>Name is" + empJson.name);
document.write("<br>Age is" + empJson.age);
document.write("<br>Result is" + empJson.result);