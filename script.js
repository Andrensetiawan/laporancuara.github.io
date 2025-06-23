const apiKey = "26f3a69acec26f9214f044d02c449636";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Masukkan nama kota!");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "Kota tidak ditemukan.";
        return;
      }

      const weather = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
        <p><strong>${data.main.temp}°C</strong></p>
        <p>${data.weather[0].description}</p>
      `;

      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weatherResult").innerHTML = "Gagal mengambil data cuaca.";
    });
}
