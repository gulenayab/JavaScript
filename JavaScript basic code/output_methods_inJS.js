//there are four methods for outputting data in javascript
//method_1
console.log("Javascript output through console method");

//method_2
window.alert("This is alert method in javascript");

//method_3
document.write("This is javascript output method");

//method_4
document.getElementById('h1').innerHTML = "The inner html text is changed by the js output method";

//method_5
var age  = window.prompt("Enter your age");
if(age>18){
console.log("you are eligible")
}
else{
    console.log("you are not eligible")
}
//method_6
window.confirm("Are you sure to quit?");