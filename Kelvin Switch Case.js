let temperature = 9
let condition = "thunder"
let gotoWork;

// if(condition != "sunny" || condition != "cloudy" || condition != "rainy" || condition != "thunder" || condition != "snowy"){
// 	condition = prompt("INCORRECT VALUE! Valid options are : sunny, cloudy, rainy, snowy, thunder")
// }

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}
switch (condition) {
    case "sunny":
        if (temperature >= 10 && temperature < 20) {
            console.log("weather is great");
            gotoWork = true;
        } else if (temperature >= 20 && temperature < 30) {
            console.log("weather is good but abit hot");
            gotoWork = true;
        }
        else {
            console.log("temp is too bad")
            gotoWork = false;
        }
        break;
    case "thunder":
        console.log("stay home the weather is bad")
        gotoWork = false
        break;

    case "snowing":
        console.log("stay home the weather is bad")
        gotoWork = false
        break;
}