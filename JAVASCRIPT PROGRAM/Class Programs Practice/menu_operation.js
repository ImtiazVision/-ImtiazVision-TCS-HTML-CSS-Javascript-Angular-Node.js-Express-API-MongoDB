// alert("Welcome to External JavaScript File");

function addData() {
  
  // The following code get the value of the input field name and age
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // The following code creates a p tag 
  var myPTag = document.createElement("p"); 

  // The following code create text node  

  var myPTagContent = document.createTextNode("Name is " + name + " Age is  " + age);

  myPTag.setAttribute("style", "color: red"); // inline css

  // The following code appends the text node to the p tag

  myPTag.appendChild(myPTagContent);

  // The following code use id selector and append the p tag to div tag

  document.getElementById("info").appendChild(myPTag);

}