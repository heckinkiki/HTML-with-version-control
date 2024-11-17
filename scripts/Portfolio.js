

// Portfolio greeting
let GreetingElement = document.getElementById("JSGreeting");

if (TodayDate.getHours() < 12) {
    GreetingElement.innerText = "Good Morning!"
}
else if (TodayDate.getHours() < 17) {
    GreetingElement.innerText = "Good afternoon!"
}
else {
    GreetingElement.innerText = "Good evening!"
}

//TODO: Add styles to each greeting message.