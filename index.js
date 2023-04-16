//require("dotenv").config();
let city;
let lat;
let lon;
const api_key = env.SECRET_API_KEY;
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(async (position) => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

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
    const city_name = 
    "https://api.openweathermap.org/geo/1.0/reverse?lat=" + 
    lat + 
    "&lon=" + 
    lon +
    "&appid=" +
    api_key;
    const name_response = await fetch(city_name);
    const name_data = await name_response.json();
    console.log(name_data);
    document.getElementById("temp").textContent = weather_data["main"]["temp"];
    document.getElementById("feels_like").textContent = weather_data["main"]["feels_like"];
    document.getElementById("weather_description").textContent = weather_data["weather"][0]["description"];
    document.getElementById("cityName").textContent = name_data[0]["name"];
  });
}

async function getCity() {
  city = document.getElementById("userInput").value;
  console.log(city);
  const city_weather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    api_key +
    "&limit=1&units=metric";
  const city_response = await fetch(city_weather);
  const city_data = await city_response.json();
  console.log(city_data);
  const city_name = 
    "https://api.openweathermap.org/geo/1.0/reverse?lat=" + 
    city_data["coord"]["lat"] + 
    "&lon=" + 
    city_data["coord"]["lon"] +
    "&appid=" +
    api_key;
    const name_response = await fetch(city_name);
    const name_data = await name_response.json();
    console.log(name_data);
    document.getElementById("temp").textContent = city_data["main"]["temp"];
    document.getElementById("feels_like").textContent = city_data["main"]["feels_like"];
    document.getElementById("weather_description").textContent = city_data["weather"][0]["description"];
    document.getElementById("cityName").textContent = name_data[0]["name"];
};