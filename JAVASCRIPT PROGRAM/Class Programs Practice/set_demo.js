var ss = new Set();
ss.add("Imtiaz");
ss.add("Rahman");
ss.add("Rahim");
ss.add("Ahmed");
ss.add("John");
// Not allow duplicate

document.write(ss +"<br>");
document.write("Set size is: "+ss.size+ "<br>");
document.write("Search the set and see if Imtiaz is available or not and if available, return: "+ss.has("Imtiaz")+"<br>");
document.write("<br>Search the set and see if Mike is available or not and if not available, return: "+ss.has("Mike")+"<br>");

document.write("<br>To delete an element of the set, we can use ss.delete method");
ss.delete("Rahim");

document.write("<br>After deleting the Rahim element, the set size looks like this: "+ ss.size +"<br>");

// we are using of loop now
for (s of ss){
  document.write("<br>Set elements value is: "+ s +"<br>");
}
document.write("Using Arrow with Callback and forEach() function");
ss.forEach(v=>document.write("<br> Value is "+ v));