const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const weather = ["Sunny", "Partly Sunny", "Partly Cloudy", 
    "Cloudy", "Raining", "Snowing", "Thunderstorm", 
    "Foggy"];

let minTemp = 0;
let maxTemp = 100;

function generateWeather() {
    let weatherForecast = "";
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        console.log(days[i]);

        weatherForecast += `<div id="${days[i]}" class="${weatherToday} bordered shadow">
            <b>Forecast for ${days[i]}:</b><br><br> ${weatherToday} and ${tempToday} degrees. </div>`;
    }

    document.getElementById("5DayWeather").innerHTML = weatherForecast;
}

generateWeather();
