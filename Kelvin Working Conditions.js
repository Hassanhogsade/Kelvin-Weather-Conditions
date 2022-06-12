//here we created some variables, condition has a prompt which asks the user to enter a coniditon and temperature
let temp = prompt("what is the temp")
let condition = prompt("what is the condition. Valid options are : sunny, cloudy, rainy, snowy, thunder")
let goToWork;
// prompting the user to input correct weather
if (condition != "sunny" && condition != "cloudy" && condition != "raining" && condition != "thunder" && condition != "snowing") {
    condition = prompt("INCORRECT VALUE! Valid options are : sunny, cloudy, raining, snowing, thunder")
}

// i created if statements for all possible scenarios, the statements im testing is the weather.
if (temp >= 10 && temp <= 20) {
    if (condition == "sunny" || condition == "cloudy") {
        goToWork = true;
        alert('weather is decent')
    } else {
        goToWork = false
        alert('weather is bad')
    }
} else if (temp > 20 && temp <= 30) {
    if (condition == "sunny" || condition == "cloudy" || condition == "raining") {
        goToWork = true;
        alert('weather is amazing')
    } else {
        goToWork = false
        alert('weather is weird')
    }
} else if (temp > 30) {
    goToWork = false
    alert('it’s too hot to work effectively')
} else if (temp < 10) {
    goToWork = false
    alert('it’s too cold to work effectively')
}

//this will alert the true or false answer for gotoWork
alert(goToWork)