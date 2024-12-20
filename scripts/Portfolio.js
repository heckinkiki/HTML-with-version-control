// get button
let JSButton = document.getElementById("btn-alert");

// create button functions
let buttonAlert = () => alert("I made this!");
let buttonHover = () => JSButton.innerText = "Click me NOW!!!!!";
let buttonExit = () => JSButton.innerText = "Click me!";

// set button functions
JSButton.addEventListener("mouseenter", buttonHover);
JSButton.addEventListener("mouseleave", buttonExit);
JSButton.addEventListener("click", buttonAlert);

// for loop
let JSList = document.getElementById("numbers");

for (
    let i = 1;
     i <= 12; 
     i++)
{
    let newLI = document.createElement("li");
    if(i % 2 == 1)
    {
        newLI.innerText =  "Odd";
    }
    else 
    {
        newLI.innerText = "Even";
    }
   
    JSList.appendChild(newLI);
}