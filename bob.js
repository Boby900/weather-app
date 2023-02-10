const Description = document.getElementById("description");
const Temperature = document.getElementById("temperature");
const Latitude = document.getElementById("latitude");
const Longitude = document.getElementById("longitude");
const Search = document.getElementById("search");
const cityName = document.getElementById("city-name");
const countryCode = document.getElementById("country-code");

let result1 = 0;
let result2 = 0;
const geocoding = () => {
  const input1 = cityName.value;
  const input3 = countryCode.value;
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${input1},${input3}&limit=3&appid=4e85da042ac14ae79aeecba8f5d02749`
  )
    .then((response) => response.json())
    .then((response) => {
      result1 = response[0]["lat"];
      result2 = response[0]["lon"];
    })
    .catch((err) => console.error(err));
};
const options = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${result1}&lon=${result2}&appid=4e85da042ac14ae79aeecba8f5d02749`
  )
    .then((response) => response.json())
    .then((response) => {
      Temperature.innerHTML =
        (response.main.temp - 273.15).toFixed(2) + "° Celsius";
      Description.innerHTML = JSON.stringify(
        response.weather[0]["description"]
        );
        console.log(response.weather[0]["description"]);
    })
    .catch((err) => console.error(err));
};
Search.onclick = () => {
  geocoding();
  options();
};
