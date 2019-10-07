onmessage = e => {
    if (e.data.key)
        AWkey = e.data.key;
    process(e.data);
}

function process(command) {
    command = command.toLowerCase();
    let words = command.split(" ");
    console.log(words);
    if (command.includes("weather")) {
        console.log("weather");
        new WeatherProvider(words);
    }
}

const cityId = 294021;
let AWkey = "";

class WeatherProvider {
    constructor(date) {
        // let defaultCity = Registry.get("assistant.weather.defaultCity") || "";
        let data = WeatherProvider.processDate(date);
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityId}?apikey=${apiKey}`).then(response => {
            response.text().then(text => {
                let weather = JSON.parse(text)[0];
                host.send(weather.WeatherText);
            });
        })
    }

    static processDate(date) {
        let data = {};
        for (let i = 0; i < date.length; i++) {
            switch (date[i]) {
                case "in":
                    switch (date[i + 2]) {
                        case "days":
                            data.dateType = "day";
                            break;
                        case "hours":
                            data.dateType = "hour";
                    }
                    switch (date[i + 1]) {
                        case "1":
                        case "one":
                            data.date = 1;
                            break;
                        case "2":
                        case "two":
                            data.date = 2;
                            break;
                        case "3":
                        case "three":
                            data.date = 3;
                            break;
                        default:
                            data.date = date[i + 1];
                    }
                    break;
                case "today":
                case "now":
                    data.date = "now";
                    break;
                case "tomorrow":
                    data.date = 'tomorrow';
            }
        }
        return data;

    }
}