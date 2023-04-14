require('dotenv').config();

let lat;
let lon;
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    const api_key = process.env.API_KEY;
    const weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +  '&lon=' + lon + '&appid=' + api_key + '&units=metric';
    const weather_response = await fetch(weather_url);
    const weather_data = await weather_response.json();
    console.log(weather_data);
    document.getElementById('Longitude').textContent = lon;
    document.getElementById('Latitude').textContent = lat;
});
}