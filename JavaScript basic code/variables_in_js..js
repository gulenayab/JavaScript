// variables are containers for storing values
//       1: var ---->global variable
//       2: let
//       3: const---->constant, its values can't be changed once assigned

var name = "nayab";
name = "aa";
function test1(){
    var name = "nayab";
name = "aa";
console.log(name);
}
console.log(name);
test1();


let uni = "UET";
uni = "KMU";
function test(){
    let uni = "UET";
uni = "KMU";
console.log(uni)
}
console.log(uni)
test();

const dob = "8-august-2022";
function info()
{
    const dob = "8-august-2022";
console.log(dob);
}
console.log(dob)
info();