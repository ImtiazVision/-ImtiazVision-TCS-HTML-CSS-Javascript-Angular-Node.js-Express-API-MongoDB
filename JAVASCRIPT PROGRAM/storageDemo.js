fucntion storeData() { 
  sessionStorage.setItem("obj1", "Raj");
  localStorage.setItem("obj2", "Raju");
  console.log("Data store in session and local storage");
}

function getData() {
  let abc = sessionStorage.getItem("obj1");
  let xyz = localStorage.getItem("obj1");
  let empObj = sessionStorage.getItem("empObj");
  let empJson = JSON.parse(empObj);
  console.log("emp obj"+ empJson.id);
  console.log("Value from session storage is "+ abc);
  console.log("Value from local storage is "+ xyz);
}

function removeData() {
  sessionStorage.removeItem("obj1");
  localStorage.removeItem("obj2");
  console.log("Data removed from session and local storage");
}
function displayData() {
  let empObj = sessionStorage.getItem("empObj");
  let empJson = JSON.parse(empObj);
  var startTable = "<table><tr><th>Id</th><th>Name</th><th>Age</th></tr>
  console.log("Value from session storage is "+ abc);
  console.log("Value from local storage is "+ xyz);
}