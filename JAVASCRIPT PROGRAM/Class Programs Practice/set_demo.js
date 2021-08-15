var ss = new Set();
ss.add("Imtiaz");
ss.add("Rahman");
ss.add("Rahim");
ss.add("Ahmed");
ss.add("John");
// Not allow duplicate

document.write(ss +"<br>");
document.write("Set size is: "+ss.size+ "<br>");
document.write("Search the set and see Imtiaz is available or not and if available, return: "+ss.has("Imtiaz")+"<br>");