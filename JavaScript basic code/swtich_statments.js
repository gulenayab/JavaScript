var role = "topper";
switch(role)
{
    case "cr":
         console.log("you are the CR");
         break

    case "gr":
        console.log("you are the GR");
        break
    
    case "topper":
        console.log("you are TOPPER");
        break

    case "back bencher":
        console.log("back bencher")
        break
}


//ternary operator
function checkNumber(num)
{
    var result;
    num%2== 0 ? result = "Even" : "odd";
    return result;
}
console.log(checkNumber(4));