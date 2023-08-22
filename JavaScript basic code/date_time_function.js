/********************     Date Function  ****************/


//var today = new Date();
//var today = Date.now();
var today = new Date();
// document.getElementById('divv').innerHTML=today.toISOString()
document.getElementById('divv').innerHTML=today.getDate();
 var a = document.getElementById('divv').innerHTML=today.toLocaleString();



/********************     Time Function  ****************/

setTimeout(function()
{
    console.log("set timeout function after 2 sec");
}, 2000)



setInterval(functionName() , 3000);