// alert("Welcome to External JS");
// function addData(){ 
//   // alert("Event fired...");
  
//   // here we are creating a dynamic p tag called myPTag
//   var myPTag = document.createElement("p");
//   // now we will create the content (text elements that goes inside the p tag)  of the p tag
//   var myPTagContent = document.createTextNode("Welcome to DOM Operation");
//   // now we will add the content to the parent p tag and it is possible because of the DOM Hiearchy 
//   myPTag.appendChild(myPTagContent);

//   // now we will add the p tag to the body of the div tag inside the html file and show the output on the browser. Here we are creating dynamic paragraph upon the click of the button. appendChild() method adds the p tag content to the body of the div tag.
//   document.getElementById("data").appendChild(myPTag);

// }


function addData() {
  // alert("Event fired...");


  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // here we are creating a dynamic p tag called myPTag
  var myPTag = document.createElement("p");
  // now we will create the content (text elements that goes inside the p tag)  of the p tag
  var myPTagContent = document.createTextNode("Name is : "+ name + " and age is : " + age);
  // here we are setting the attribute of the tag i.e. styling and look and feel of the tag (color, font-size, etc)
  myPTag.setAttribute("style", "color:green; font-size:20px;"); // inline styling
  myPTag.setAttribute("class", "myPClass"); // external styling
  // now we will add the content to the parent p tag and it is possible because of the DOM Hiearchy 
  myPTag.appendChild(myPTagContent);

  // now we will add the p tag to the body of the div tag inside the html file and show the output on the browser. Here we are creating dynamic paragraph upon the click of the button. appendChild() method adds the p tag content to the body of the div tag.
  document.getElementById("data").appendChild(myPTag);

}












// alert("welcome to Javascript");
// function addData(){
//   alert("welcome to Javascript");
//   var name = document.getElementById("name").value;
//   var age = document.getElementById("age").value;
//   // This code create p tag
//   var myPTag = document.createElement("p");
//   // This code create text node
//   var myPTagContent = document.createTextNode(name + " is " + age + " years old.");
//   myPTag.setAttribute("style", "color: red"); // inline css 
//   myPTag.setAttribute("class", "myClass"); // external css 

//   //This code add text node to p tag
//   myPTag.appendChild(myPTagContent);

//   //refer the tag using id selector and append the p tag to div tag
//   document.getElementById("info").appendChild(myPTag);
// }

// alert ("Welcome to an external javascript file");

// function addData(){
//   // alert ("Event fired!!!" + " " + "welcome to Javascript");
//   // This will create a p tag for the name and age
//   var name = document.getElementById("name").value;
//   // document.write(name);
//   var age = document.getElementById("age").value;

//   // This code create p tag
//   var myPTag = document.createElement("p");

//   // This code create text node
//   var myPTagContent = document.createTextNode(name + " is " + age + " years old.");
//   myPTag.setAttribute("style", "color: red"); // inline css
//   myPTag.setAttribute("class", "myClass"); // external css
//   // This code add text node to p tag
//   myPTag.appendChild(myPTagContent);

//   //refer the tag using id selector and append the p tag to div tag
//   document.getElementById("info").appendChild(myPTag);

// }

// addData();