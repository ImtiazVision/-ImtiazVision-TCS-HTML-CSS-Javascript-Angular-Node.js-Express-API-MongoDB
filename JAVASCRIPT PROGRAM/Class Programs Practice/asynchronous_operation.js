// Statement level

// document.write("1st Statement");

setTimeout(() => {
  document.getElementById("obj2").innerHTML="<br>1st Statement"}, 1000);

  setTimeout("dis()", 1000); 
    document.write("<br>3rd Statement");

setInterval("info()", 1000);

function dis() {
  // document.write("<br>2nd Statement");
  document.getElementById("obj1").innerHTML="<br>2nd Statement";
}

var i=0;
function info() {
  
  document.getElementById("obj3").innerHTML="<br>4th Statement" + " Timecount # " +i;
  i++;
}