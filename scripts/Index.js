// Portfolio greeting
let GreetingElement = document.getElementById("JSGreeting");

if (TodayDate.getHours() < 12) {
    GreetingElement.innerHTML = "<p id=\"MorningGreeting\">Good Morning!</p>";
}
else if (TodayDate.getHours() < 17) {
    GreetingElement.innerHTML = "<p id=\"AfternoonGreeting\">Good afternoon!</p>";
}
else {
    GreetingElement.innerHTML = "<p id=\"EveningGreeting\">Good evening!</p>";
}

//TODO: Add styles to each greeting message.