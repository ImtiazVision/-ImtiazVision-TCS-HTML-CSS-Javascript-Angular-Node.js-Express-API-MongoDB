function storeData(){
  // Take value from text field using id or name we can store json object.But we have to convert it into string.
  let employee = {id:101,name:"Imtiaz",age:24};
  sessionStorage.setItem("employeeObj",JSON.stringify(employee));
  console.log("Data stored in session storage");

  sessionStorage.setItem("obj1", "Imtiaz");
  localStorage.setItem("obj2","John");
  console.log("Data stored in session and local storage");
}

function getData(){
  // get the data item through key 
  let xyz =  sessionStorage.getItem("obj1");
  let abc = localStorage.getItem("obj2");
  let employeeObj = sessionStorage.getItem("employeeObj");
  let employeeJson = JSON.parse(employeeObj);
  console.log("Employee Obj is: "+ employeeJson.name);
  console.log("Value from Session Storage is: "+ xyz);
  console.log("Value from Local Storage is: "+ abc);
}

function removeData(){
  // remove the data item through key 
  sessionStorage.removeItem("obj1");
  localStorage.removeItem("obj2");
  console.log("Data removed from session and local storage");
}

function displayData(){ 
  // getData();
  // storeData();
  let employeeObj = sessionStorage.getItem("employeeObj");
  let employeeJson = JSON.parse(employeeObj);
  var tableContent = ""
  var startTable = "<table border=1><tr><th>Id</th><th>Name</th><th>Age</th></tr> "

  tableContent = "<tr><td>"+employeeJson.id+"</td><td>"+employeeJson.name+"</td><td>"+employeeJson.age+"</td></tr> "

  var endTable = "</table> "

  tableContent = startTable + tableContent  + endTable;

  document.getElementById("data").innerHTML=tableContent;
}