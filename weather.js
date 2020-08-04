let weatherContainer = document.querySelector('.weather-container');
let body = document.querySelector('body');
let owm = 'https://api.openweathermap.org/data/2.5/weather?zip=11722,us&appid=adb117b6500a18ac7ad60e3d23b0ac24&lang=en&units=imperial'

fetch(owm)
    .then((response) => (
        response.json()
    ))

    .then((weatherObj) => {
        console.log(weatherObj);
        currentWeather(weatherObj);
    })


let currentWeather = (weatherObj) => {
    let city = document.querySelector('.city');
    city.innerHTML = weatherObj.name;

    let weatherCard = document.createElement('div');
    weatherCard.className = 'weatherCard';

    let weatherIcon = document.createElement('img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png`;
    weatherCard.appendChild(weatherIcon);

    let mainWeather = document.createElement('p');
    mainWeather.innerHTML = weatherObj.main.temp;
    weatherCard.appendChild(mainWeather);

    let feelsLike = document.createElement('p');
    feelsLike.innerHTML = `Feels Like ${weatherObj.main.feels_like}`;
    weatherCard.appendChild(feelsLike);



    weatherContainer.appendChild(weatherCard);
}
