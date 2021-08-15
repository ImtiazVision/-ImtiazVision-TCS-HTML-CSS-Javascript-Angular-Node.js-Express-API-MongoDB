// number of parameter must match  
function add(x, y) {
    console.log(x);
    console.log(y);
    console.log(x + y);
}
add(2, 3);
add(4.5, 5.8);
add(6, "7");
add("John", "Pem");
add(8, 9.1);
// add()    this will throw an error because the parameter is empty
// add(33)   this also will give us error since there is only one parameter provided when calling the function 
// The following function implements strict type checking
function addNumber(x, y) {
    var sum = x + y;
    console.log("Sum of the 2 number is " + sum);
}
addNumber(30, 99);
addNumber(30, 99.9);
// addNumber(30,"99"); this will give us error since "99" is indeed a string
// addNumber("John", "Atik"); this will give us error since "Atik" and "John" are indeed a string
// the following function provides no return types 
function info12() {
    console.log("This is an info function with no return type");
}
// The following function provides only string data types 
function sayHello(name) {
    return "Hello " + name;
}
// The following function may or maynot return data but by default it will return any data type
function hello(a) {
    return "Hello";
}
// Optional Parameters for functions
// (): void means that the function does not return any data
// ? means that the parameter is optional for age and by default the age parameter value is optional. We can provide as much optional parameters as we want but there should not be any gap b/w two parameters. Optional parameters declaration goes from right to left. All optional parameters must be on the right side of the mandatory parameter declaration.
function empInfo(id, name, age) {
    console.log("Id is: " + id);
    console.log("Name is: " + name);
    console.log("Age is: " + age);
}
empInfo(12, "John", 30);
empInfo(142, "Kale");
// Default Function Initialization 
function studentInfo(sId, sName, age) {
    if (sId === void 0) { sId = 0; }
    if (sName === void 0) { sName = "Unknown"; }
    if (age === void 0) { age = 7; }
    console.log("Id is: " + sId);
    console.log("Name is: " + sName);
    console.log("Age is: " + age);
}
studentInfo(121, "Mike");
studentInfo(12);
studentInfo();
// Rest operator or parameter       
// Rest parameter is used to receive 0 or 1 or many parameters 
function employeeInfo(id, name, salary) {
    var skillset = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        skillset[_i - 3] = arguments[_i];
    }
    console.log("Id is: " + id);
    console.log("Name is: " + name);
    console.log("Salary is: " + salary);
    console.log("Number of Skillset is: " + skillset.length);
    console.log("Skillset is: " + skillset);
}
employeeInfo(1, "Jordan", 10440);
employeeInfo(2, "Mike", 18000, "Java");
employeeInfo(3, "Billy", 24000, "Javascript", "Java");
employeeInfo(4, "Carlos", 24500, "Python", "C++", "Angular");
