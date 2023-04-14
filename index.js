let lat;
let lon;
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    
    const api_key = 'd3a29b99f9409f5245af2c98a5bd4b88';
    const weather_url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +  '&lon=' + lon + '&appid=' + api_key + '&units=metric';
    const weather_response = await fetch(weather_url);
    document.getElementById('Longitude').textContent = lon;
    document.getElementById('Latititude').textContent = lat;
    const weather_data = await weather_response.json();
    console.log(weather_data);
});
}