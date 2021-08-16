var mm = new Map();
// mm.set() method store information in the map

// key value pair where key must be unique and value can have duplicates. In the following example,the first one is key and the 2nd value is the value.
mm.set(1,"Imtiaz");
mm.set(2,"John");
mm.set(3,"Mike");
mm.set(4,"Roher");
mm.set(5,"Hajer");
mm.set(6,"Himel");
mm.set(6,"Simi"); // Duplicate key is not allowed and it will not be stored
mm.set(7,"Himel"); // name can have duplicates where as key is unique
document.write("<br>Name can have duplicates where as key is unique");

document.write("<br>"+ mm);
document.write("<br>Map size is: "+mm.size);

document.write("<br><br> Get value using key " + mm.get(1));
document.write("<br><br> Get value using key " + mm.get(10));
document.write("<br> Delete record using key and it will show true if the value indeed gets deleted given that it exists within the map function array:<br> " + mm.delete(5));
document.write("<br><br> Delete value using key:<br> " + mm.delete(3));

// map has a function called .keys() that only returns keys
// we are going to use a of type for loop to get all the keys inside the map function array

document.write("<br>Map has a function called .keys() that only returns keys.We are going to use a of type for loop to get all the keys inside the map function array:<br>");
for(var k of mm.keys()){
    // document.write("<br>Keys: "+k);
    document.write("<br>Keys: "+k + " Values: "+mm.get(k));
}

// If we don't want to get the keys but rather willing to get the values, use .values() function
document.write("<br><br> If we don't want to get the keys but rather willing to get the values, use .values() function:<br>");
for(var v of mm.values()){
    document.write("<br>Values: "+v);
} 