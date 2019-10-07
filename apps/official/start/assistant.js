let AWkey = "";
const cityId = 294021;
const cityName = "Moscow, RU"; //TODO: City selection

onmessage = e => {
    switch (e.data.action) {
        case "sendKeys":
            AWkey = e.data.keys.AccuWeatherkey;
            break;
        case "process":
            process(e.data.command);
    }
};

postMessage({
    action: "ready"
});

function process(command) {
    command = command.toLowerCase().replace(/[.,?]/g, "");
    let words = command.split(" ");
    if (command.includes("weather")) {
        if (!AWkey)
            postMessage({
                action: "reply",
                reply: "No AccuWeather API key provided. Obtain one on <a target='_blank' href='https://developer.accuweather.com/'>https://developer.accuweather.com</a>."
            });
        else
            new WeatherProvider(words);
    } else if (command.startsWith("hello") || command.startsWith("hi") || command.startsWith("hey")) {
        postMessage({
            action: "reply",
            reply: "Hello there, I'm your very own Assistant."
        });
        postMessage({
            action: "reply",
            reply: "I can do a lot of work around the system and even fetch some data from the Internet."
        });
        let example = "For example, you may ask me how the weather is right now.";
        postMessage({
            action: "reply",
            reply: example
        });
    }
}


class WeatherProvider {
    constructor(date) {
        // let defaultCity = Registry.get("assistant.weather.defaultCity") || "";
        let data = WeatherProvider.processDate(date);
        if (data.numOfUnits === "now")
            fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${AWkey}&details=true`).then(response => {
                response.text().then(WeatherProvider.outputCurrentWeather);
            }).catch(() => {
                postMessage({
                    action: "reply",
                    reply: "We were unable to retrieve weather data. Check your internet connection."
                });
            });
        else if (data.units === "day")
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${AWkey}&details=true&metric=true`).then(response => {
                response.text().then(text => {
                    console.log(text);
                    let weather = JSON.parse(text).DailyForecasts[data.numOfUnits];
                    WeatherProvider.outputWeatherDay(weather, data.numOfUnits);
                });
            }).catch(() => {
                postMessage({
                    action: "reply",
                    reply: "We were unable to retrieve weather data. Check your internet connection."
                });
            });
    }

    static processDate(date) {
        let data = {};
        for (let i = 0; i < date.length; i++) {
            console.log(date[i]);
            switch (date[i]) {
                case "in":
                    switch (date[i + 2]) {
                        case "days":
                        case "day":
                            data.units = "day";
                            break;
                        case "hours":
                        case "hour":
                            data.units = "hour";
                    }
                    switch (date[i + 1]) {
                        case "1":
                        case "one":
                            data.numOfUnits = 1;
                            break;
                        case "2":
                        case "two":
                            data.numOfUnits = 2;
                            break;
                        case "3":
                        case "three":
                            data.numOfUnits = 3;
                            break;
                        default:
                            data.numOfUnits = date[i + 1];
                    }
                    break;
                case "today":
                case "now":
                    data.numOfUnits = "now";
                    data.units = "day";
                    break;
                case "tomorrow":
                    data.units = "day";
                    data.numOfUnits = 1;
            }
        }
        return data;
    }

    static outputWeatherDay(weather, days) {
        let temp = ((weather.Temperature.Maximum.Value + weather.Temperature.Minimum.Value) / 2).toFixed(2);
        let resp = `
Weather ${days === 1 ? "tomorrow" : "in " + days + " days"} in <b>${cityName}</b>
<h1 class='mb-0 mt-2 font-weight-light w-100 d-flex align-items-center'>
    <img src="https://accuweather.com/images/weathericons/${weather.Day.Icon}.svg" width="32" height="32" class="mr-2"
         style="filter: brightness(0);"/>
    ${temp}°C
</h1>
<div>${weather.Day.ShortPhrase}</div>
<div class="d-flex my-2">
    <i class="mdi mdi-18px lh-18 d-inline-flex align-items-center mdi-weather-windy"></i>
    Wind: ${weather.Day.Wind.Speed.Value} ${weather.Day.Wind.Speed.Unit} ${weather.Day.Wind.Direction.Localized}
</div>
<a href="${weather.Link}" target="_blank">AccuWeather</a>`;
        postMessage({
            action: "reply",
            reply: resp
        });
    }

    static outputCurrentWeather(weather) {
        weather = JSON.parse(weather)[0];
        let resp = `
Current weather in <b>${cityName}</b>
<h1 class='mb-0 mt-2 font-weight-light w-100 d-flex align-items-center'>
    <img src="https://accuweather.com/images/weathericons/${weather.WeatherIcon}.svg" width="32" height="32" class="mr-2"
         style="filter: brightness(0);"/>
    ${weather.Temperature.Metric.Value}°C
</h1>
<div>${weather.WeatherText}</div>
<div class="d-flex mt-2">
    <i class="mdi mdi-18px lh-18 d-inline-flex align-items-center mdi-water"></i>
    Humidity: ${weather.RelativeHumidity}%
</div>
<div class="d-flex mb-2">
    <i class="mdi mdi-18px lh-18 d-inline-flex align-items-center mdi-weather-windy"></i>
    Wind: ${weather.Wind.Speed.Metric.Value} ${weather.Wind.Speed.Metric.Unit} ${weather.Wind.Direction.Localized}
</div>
<a href="${weather.Link}" target="_blank">AccuWeather</a>`;
        postMessage({
            action: "reply",
            reply: resp
        });
    }
}