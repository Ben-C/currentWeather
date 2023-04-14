const lat = 53.068802;
const lon = -1.227760;

const api_key = 'd3a29b99f9409f5245af2c98a5bd4b88';
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +  '&lon=' + lon + '&appid=' + api_key + '&units=metric';
const weather_response = await fetch(weather_url);
const weather_data = await weather_response.json();

console.log(weather_data);