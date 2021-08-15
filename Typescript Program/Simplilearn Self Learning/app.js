var isAdmin = true;
var user = "Mike";
var welcome;
if (isAdmin) {
    welcome = "Welcome, " + user;
}
else {
    welcome = "Welcome, guest";
}
console.log(welcome);
