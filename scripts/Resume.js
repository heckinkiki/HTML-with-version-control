// get button
let JSButton = document.getElementById("btn-alert");

// create button functions
let buttonAlert = () => alert("Hello World!")
let buttonHover = () => JSButton.innerText = "Click me NOW!!!!!"
let buttonExit = () => JSButton.innerText = "Click me!"

// set button functions
JSButton.addEventListener("mouseenter", buttonHover)
JSButton.addEventListener("mouseleave", buttonExit)
JSButton.addEventListener("click", buttonAlert);