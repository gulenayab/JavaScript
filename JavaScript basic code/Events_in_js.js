//id selector
var button = document.getElementById("btn");
button.addEventListener("click" , function()
{
    console.log("Button is clicked");
    document.getElementById("h1").innerHTML="The button is clicked";
});

button.addEventListener("dblclick" , function()
{
    document.getElementById("h2").innerHTML="The button is double clicked";
})


//query selector
//when one type tag is present once , then we directly select it using query selector

var div= document.querySelector("div") ;
div.addEventListener("click" , function()
{
    document.querySelector("div").innerHTML=`<h1>This is selected through query selector</h1>`;
});

var color =  document.getElementById("color") ;
//adding css and event listener

var para = document.getElementById("para") ;
function eventHandler()
{
    para.style.backgroundColor = "orange";
}

function red()
{
    para.style.backgroundColor = "red";
}

// color.onclick = eventHandler;
// color.ondblclick = red;


//consoling random number by click
function randomNumberGen()
{
    console.log(Math.floor(Math.random() * 255));
    para.style.backgroundColor = `rgb (${Math.floor(Math.random() * 255)} ,  ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)})`;
}

 color.onclick =randomNumberGen;

 //redirecting to a new url after a specific time  --> after 5 sec
setTimeout(function()
{
    console.log("redirecting");
    window.location = "https://google.com"
} , 5000);