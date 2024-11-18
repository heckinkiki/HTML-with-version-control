
let TodayDate = new Date();

// Log Local time.
console.log(TodayDate)

//Update footer
document.getElementById("Copyright").innerHTML = "<p> (c) Kierstin, " + TodayDate.getFullYear() + ".</p>";
