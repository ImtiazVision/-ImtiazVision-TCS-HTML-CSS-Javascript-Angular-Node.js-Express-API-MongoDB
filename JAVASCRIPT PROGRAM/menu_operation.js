// alert("welcome to Javascript");
function addData(){
  // alert("welcome to Javascript");
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  // This code create p tag
  var myPTag = document.createElement("p");
  // This code create text node
  var myPTagContent = document.createTextNode(name + " is " + age + " years old.");
  myPTag.setAttribute("style", "color: red"); // inline css 
  myPTag.setAttribute("class", "myClass"); // external css 

  //This code add text node to p tag
  myPTag.appendChild(myPTagContent);

  //refer the tag using id selector and append the p tag to div tag
  document.getElementById("info").appendChild(myPTag);
}