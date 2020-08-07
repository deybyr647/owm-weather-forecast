let weatherContainer = document.querySelector('.weather-container');
let body = document.querySelector('body');
let owm = `https://api.openweathermap.org/data/2.5/weather?zip=11722,us&appid=adb117b6500a18ac7ad60e3d23b0ac24&lang=en&units=imperial`;

fetch(owm)
    .then((response) => (
        response.json()
    ))

    .then((weatherObj) => {
        console.log(weatherObj);
        currentWeather(weatherObj);
    })

let capitalizeStr = (str) => {
    let splitStr = str.toLowerCase().split(' ');
    for(let l = 0; l < splitStr.length; l++){
        splitStr[l] = splitStr[l].charAt(0).toUpperCase() + splitStr[l].substring(1);
    }

    return splitStr.join(' ');

}

let currentWeather = (weatherObj) => {
    let city = document.querySelector('.city');
    city.innerHTML = weatherObj.name;

    let weatherCard = document.createElement('div');
    weatherCard.className = 'weatherCard';

    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;
    weatherCard.appendChild(weatherIcon);

    let weatherDescription = document.createElement('p');
    weatherDescription.innerHTML = capitalizeStr(weatherObj.weather[0].description);
    weatherCard.appendChild(weatherDescription);

    let mainWeather = document.createElement('p');
    mainWeather.innerHTML = `${Math.floor(weatherObj.main.temp)} &deg`;
    weatherCard.appendChild(mainWeather);

    let feelsLike = document.createElement('p');
    feelsLike.innerHTML = `Feels Like ${Math.ceil(weatherObj.main.feels_like)} &deg`;
    weatherCard.appendChild(feelsLike);

    let windSpeed = document.createElement('p');
    windSpeed.innerHTML = `Wind: ${Math.floor(weatherObj.wind.speed)} MPH`;
    weatherCard.appendChild(windSpeed);

    let pressure = document.createElement('p');
    pressure.innerHTML = `Pressure: ${Math.ceil(weatherObj.main.pressure)} hPa`;
    weatherCard.appendChild(pressure);

    let humidityPercentage = document.createElement('p');
    humidityPercentage.innerHTML = `Humidity: ${Math.ceil(weatherObj.main.humidity)} &#37`;
    weatherCard.appendChild(humidityPercentage);

    weatherContainer.appendChild(weatherCard);
}
