let body = document.querySelector('body');
let weatherContainer = document.querySelector('.weather-container');

let zipInput = document.querySelector('#zipCode');
let submitZip = document.querySelector('#submitBtn');
let zipForm = document.querySelector('.cityInput');

let capitalizeStr = (str) => {
    let splitStr = str.toLowerCase().split(' ');
    for(let l = 0; l < splitStr.length; l++){
        splitStr[l] = splitStr[l].charAt(0).toUpperCase() + splitStr[l].substring(1);
    }

    return splitStr.join(' ');
}

let displayWeather = (weatherObj) => {
    let city = document.querySelector('.city');
    city.innerHTML = weatherObj.name;

    let weatherIcon = document.querySelector('#weatherIcon');
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;

    let weatherDescription = document.querySelector('#weatherDescription');
    weatherDescription.innerHTML = capitalizeStr(weatherObj.weather[0].description);

    let mainWeather = document.querySelector('#mainWeather');
    mainWeather.innerHTML = `${Math.floor(weatherObj.main.temp)} &deg`;

    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = `Feels Like ${Math.ceil(weatherObj.main.feels_like)} &deg`;

    let windSpeed = document.querySelector('#windSpeed');
    windSpeed.innerHTML = `Wind: ${Math.floor(weatherObj.wind.speed)} MPH`;

    let pressure = document.querySelector('#pressure');
    pressure.innerHTML = `Pressure: ${Math.ceil(weatherObj.main.pressure)} hPa`;

    let humidityPercentage = document.querySelector('#humidity');
    humidityPercentage.innerHTML = `Humidity: ${Math.ceil(weatherObj.main.humidity)} &#37`;
}

let getWeather = (zip) => {
    let owm = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=adb117b6500a18ac7ad60e3d23b0ac24&lang=en&units=imperial`;
    fetch(owm)
        .then((response) => (
            response.json()
        ))

        .then((weatherObj) => {
            displayWeather(weatherObj);
        })
}

zipForm.onsubmit = (event) => {
    event.preventDefault();
    let zipCode = zipInput.value;
    getWeather(zipCode);
    zipInput.value = '';

}

window.onload = () => {
    let zipCode = 10001;
    getWeather(zipCode);
}
