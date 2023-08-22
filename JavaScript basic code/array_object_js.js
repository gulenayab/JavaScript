//string array
var fruits = ["banana" , "apple" , "grapes" , "orange"];
console.log(fruits);
//printing a specific index of array 
console.log(fruits[3]);

//object --> is a collection of key-value pair
var person = {
       // key   :   value
        name : "nayab",
        age:     21,
        dept: "computer system",
        uni: "UET Peshawar",
        skills: function()
        {
            var skillset = ["html" , "js" ,"node"]
            console.log(skillset);
        }

}
console.log(person.age + " " + person.name );