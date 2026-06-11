const apiKey = "321d7925caa5fd0390bea535b330cdd4";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const geoUrl =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  fetch(geoUrl)
    .then(res => res.json())
    .then(cityData => {
      if (cityData.length === 0) {
        alert("City not found");
        return;
      }

      const lat = cityData[0].lat;
      const lon = cityData[0].lon;

      const weatherUrl =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

      return fetch(weatherUrl);
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById("weatherCard").style.display = "block";
      document.getElementById("city").innerText =
        `${data.name}, ${data.sys.country}`;
      document.getElementById("temp").innerText =
        `🌡 Temperature: ${data.main.temp}°C`;
      document.getElementById("desc").innerText =
        `🌤 Condition: ${data.weather[0].description}`;
    })
    .catch(err => {
      console.error(err);
      alert("Error fetching weather data");
    });
}

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      document.getElementById("advice").innerText =
        `"${data.slip.advice}"`;
    });
}

getAdvice();
