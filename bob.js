const Description = document.getElementById("description")
const Temperature = document.getElementById("temperature")
const Latitude = document.getElementById("latitude")
const Longitude = document.getElementById("longitude")
const Search = document.getElementById("search")
const cityName = document.getElementById("city-name")
const countryCode = document.getElementById("country-code")
// const options = () => {
//   const lat1 = Number(Latitude.value)
//   const long1 = Number(Longitude.value)
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=3fbe2784381525fa4d3287356282d330`, options)
//     .then(response => response.json())
//     .then(response => Description.innerHTML = JSON.stringify(response.weather[0].description))
//     .catch(err => console.error(err));
// }

// const options2 = () => {
//   const lat1 = Number(Latitude.value)
//   const long1 = Number(Longitude.value)
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${long1}&appid=3fbe2784381525fa4d3287356282d330`, options)
//     .then(response => response.json())
//     .then(response => Temperature.innerHTML = Number(JSON.stringify(response.main.temp)-273.15).toFixed(2)+"° Celsius")
//     .catch(err => console.error(err));
// }

const geocoding = ()=>{
  const input1 = cityName.value
  const input3 = countryCode.value
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input1},${input3}&limit=3&appid=4e85da042ac14ae79aeecba8f5d02749`)
  .then(response => response.json())
  .then(response => console.log(response[0]["lat"],response[0]["lon"]))
  .catch(err => console.error(err))  

}
Search.onclick = () => { geocoding()}
 
