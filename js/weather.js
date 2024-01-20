function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "9a5583365dcb51cfa5ca91f257620cbf";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      if (data.weather[0].main === "Rain") {
        weather.classList.add("rain");
        console.log(weather);
      } else {
        weather.style.color = "";
      }
    });
  console.log(url);
  console.log(position);
  console.log("you live hear", lat, lon);
}

function onGeoError() {
  alert("Cant't find you. there is no weather data");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
