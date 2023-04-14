//require("dotenv").config();
let city;
let lat;
let lon;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    const api_key = 'd3a29b99f9409f5245af2c98a5bd4b88';
    const weather_url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      api_key +
      "&units=metric";
    const weather_response = await fetch(weather_url);
    const weather_data = await weather_response.json();
    console.log(weather_data);
    document.getElementById("Longitude").textContent = lon;
    document.getElementById("Latitude").textContent = lat;
  });
}

function getCity() {
  city = document.getElementById("userInput").value;
  console.log(city);
}

async function geoCode(city, api_key) {
  const city_weather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    api_key +
    "&units=metric";
  const city_response = await fetch(city_weather);
  const city_data = await city_response.json();
  console.log(city_data);
  document.getElementById("Longitude").textContent = city_data['weather'][0]['description'];
    document.getElementById("Latitude").textContent = city_data['main']['temp'];
}
