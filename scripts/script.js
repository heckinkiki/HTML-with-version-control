
let TodayDate = new Date();

// Log Local time.
console.log(TodayDate)

//Update footer
document.getElementById("Copyright").innerHTML = "<p> (c) Keirstin, " + TodayDate.getFullYear() + "."
