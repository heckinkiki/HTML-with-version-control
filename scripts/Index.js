// Portfolio greeting
let GreetingElement = document.getElementById("JSGreeting");

if (TodayDate.getHours() < 12) {
    GreetingElement.innerHTML = "<h1 id=\"JSGreeting\" class=\"MorningGreeting\">Good Morning! ☼</h1>";
}
else if (TodayDate.getHours() < 17) {
    GreetingElement.innerHTML = "<h1 id=\"JSGreeting\" class=\"AfternoonGreeting\">Good Afternoon! ☁︎</h1>";
}
else {
    GreetingElement.innerHTML = "<h1 id=\"JSGreeting\" class=\"EveningGreeting\">Good Evening! ☾</h1>";
}

//TODO: Add styles to each greeting message.