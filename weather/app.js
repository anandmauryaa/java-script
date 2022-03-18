// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key:
    "00b5fa12b4ba606299154598b3526651",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchinputbox = document.getElementById("input-box");

searchinputbox.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        getWeatherReport(searchinputbox.value);
    }
});

// get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
} 

//show weather report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText=`${weather.name} ${weather.sys.country}`;

    let temp = document.getElementById("temp");
    temp.innerHTML=`${Math.round(weather.main.temp- 273.15)}&deg;C`;

    // C = K - 273.15

    let maxMinTemp = document.getElementById('min-max');
    maxMinTemp.innerHTML=`${Math.floor(weather.main.temp_min- 273.15)}&deg;C (min) / ${Math.ceil(weather.main.temp_max- 273.15)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let weatherWind=document.getElementById('wind');
    weatherWind.innerText=`Wind speeds ${weather.wind.speed}m/s`;

    let weatherHumidity = document.getElementById('humidity');
    weatherHumidity.innerHTML=`Humidity ${weather.main.humidity}%`;

    let weatherPressure = document.getElementById('pressure');
    weatherPressure.innerHTML=`Pressure ${weather.main.pressure}hpa`;

    let icon = document.querySelectorAll('.img');
    icon.innerText=`${weather.weather[0].icon}.png`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText=dateManage(todayDate);
}

//date manage
function dateManage(dateArg){

    let days = ["Sunday","Monday","Tuesday","Wedensday","Thursday","friday","Saturday"];

    let months = ["Jaunary","Febuary","March","April","June","July","August","September","October","November","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}) ${year}`;
}