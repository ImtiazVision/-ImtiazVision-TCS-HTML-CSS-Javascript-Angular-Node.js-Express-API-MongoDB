// alert("Welcome to External Javascript Course!");

function addData() { 
  // alert("Event fired...");

  //First we created a p tag dynnamically using document.createElement. Then we created the content of the p tag using document.createTextNode.Then we added the p tag to the div tag of the html page  using document.getElementById("id")appendChild(variable-name-ofdynamically-creatted-p-tag).

  // We can get the value of the text field by providing the id-name of the input text field given in the html page and invoking document.getElementById(id-name).value function and subsequently storing the value in a variable.

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // we are creating a dynamic <p> tag (paragraph) and storing it into a variable named myPTag.

  var myPTag = document.createElement("p");

  // This code create the content of the p tag/paragraph via document.createTextNode.Another words, we are creating the content of the paragraph and this is possible through the usage of document.createTextNode.

  var myPTagContent = document.createTextNode("Welcome to DOM Operation. This is so cool and dynamic. This document.createTextNode creates the content to be shown on the browser dynamically. I am amazed by the fact that we can manipulate DOM dynamically!!! First we created a p tag dynnamically using document.createElement. Then we created the content of the p tag using document.createTextNode.Then we added the p tag to the div tag of the html page  using document.getElementById and picking the id of the div from the html page and appending it to the dynamically created p tag in the Javascript file here using appendChild (variable-name-ofdynamically-created-p-tag). Now all we have to do is to keep on clicking the Add Data button and the content will be created dynamically and displayed on the browser. This code create the content of the p tag/paragraph via document.createTextNode.Another words, we are creating the content of the paragraph and this is possible through the usage of document.createTextNode.");

  // Now we are creating the content of the <p> tag using document.createTextNode.

  var myPTagContent1 = document.createTextNode("  Name is  "+name+"  Age is  "+age);

  // Now we are styling the <p> tag content dynamicaly using the style attribute and using myPTag.setAttribute(style-attribute-name, style-attribute-value) function.

  myPTag.setAttribute("style","color:blue;");
  // We can also style the <p> tag content via external css file using a class name and invoking it into the JavaScript file here.Note: We can't write CSS inside JavaScript. Hence we created an external CSS file and invoked it via a class name and in this case it's myPClass.Please make sure to link the CSS file in the html page.
  myPTag.setAttribute("class","myPClass");

  // This code add that content to the paragraph.This code add text node to p tag.

  myPTag.appendChild(myPTagContent);
  myPTag.appendChild(myPTagContent1);

  // We are planning to add the content inside the div tag to display them. To do that, we use document.getElementById function.

  // Here we are refering to the p tag using the id selector(#info) of div tag inside the html file and append the p tag created in the above code(js file) to the div tag inside the html file. 

  document.getElementById("info").appendChild(myPTag);
}