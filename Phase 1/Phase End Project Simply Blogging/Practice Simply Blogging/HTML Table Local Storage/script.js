var array1 = new Array();
function addData() {
  getData();
  array1.push({
    name: document.getElementById("name").value,
    title: document.getElementById("title").value,
    experience: document.getElementById("experience").value
  });

  localStorage.setItem("localData", JSON.stringify(array1));
  displayData();
}
function getData() {
  var string1 = localStorage.getItem("localData");
  if (string1 != null) array1 = JSON.parse(string1);
}
function deleteData() {
  localStorage.clear();
}

function displayData() {
  getData();
  var table = document.getElementById("myTable");
  for (i = 0; i < array1.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();

    cell1.innerHTML = array1[i].name;
    cell2.innerHTML = array1[i].title;
    cell3.innerHTML = array1[i].experience;
  }
}

// function addData() {
// 	var table = document.getElementById("myTable");
// 	// alert(table);
// 	var row = table.insertRow();
// 	var cell1 = row.insertCell();
// 	var cell2 = row.insertCell();
// 	var cell3 = row.insertCell();

// 	cell1.innerHTML = document.getElementById("name").value;
// 	cell2.innerHTML = document.getElementById("title").value;
// 	cell3.innerHTML = document.getElementById("experience").value;

// }
