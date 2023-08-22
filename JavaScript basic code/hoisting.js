// In other programming languages, variables or functions must be declared before using it.
// •In JavaScript, variable and function names can be used before declaring it. The JavaScript 
// compiler moves all the declarations of variables and functions at the top so that there will not be 
// any error. This is called hoisting.

name = "nayab" ;   //initilized
console.log(name);
var name;     //declared

//will output undefinied--->b/c hoisting only shifts declartions to the top of js code
console.log(student)
var student = "gul";   //declared and initilized 

var age = 22;
console.log(age)