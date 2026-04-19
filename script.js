
async function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "3bc1f5a950c4deaf118fc22b86ba5ae5"; // 🔴 Replace this

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
  alert(data.message);
  return;
}

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind").innerText = "Wind: " + data.wind.speed + " km/h";

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  } catch (error) {
    alert("Error fetching data");
  }
}