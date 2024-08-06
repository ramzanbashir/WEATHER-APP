let weatherImage = document.getElementById("image");
let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temp");
let feelLike = document.getElementById("feel");
let humidity = document.getElementById("humidity");
let airpressure = document.getElementById("airpressure");
let weatherType = document.getElementById("weatherType");
let input = document.getElementById("input");
let time = document.getElementById("time")
let conditionOfWeather = document.getElementById("conditionOfWeather");
let apikey = "49e3b820f7a47375d5b1eaaaa0cba1b0";
navigator.geolocation.getCurrentPosition((location) => {
  var latitude = location.coords.latitude;
  let longitude = location.coords.longitude;
  let getData = (cb) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => cb(res));
  };

  getData((defultData) => {
    console.log(defultData);

    let weatherCheck = defultData.weather[0].main;

    if (weatherCheck === "Haze") {
      weatherImage.style.backgroundImage = `url(./images/haze.png)`;
    } else if (weatherCheck === "Clouds") {
      weatherImage.style.backgroundImage = `url(./images/clouds.png)`;
    } else if (weatherCheck === "Rain") {
      weatherImage.style.backgroundImage = `url(./images/rain.png)`;
    } else if (weatherCheck === "Clear") {
      weatherImage.style.backgroundImage = `url(./images/clear.png)`;
    } else if (weatherCheck === "Smoke") {
      weatherImage.style.backgroundImage = `url(./images/smk.png)`;
    } else if (weatherCheck === "Drizzle") {
      weatherImage.style.backgroundImage = `url(./images/drizzling.png)`;
    }
  });

  getData((defultData) => {
    cityName.innerHTML = defultData.name;
  });

  getData((defultData) => {
    temp.innerHTML = Math.round(defultData.main.temp) + "°C";
  });

  getData((defultData) => {
    feelLike.innerHTML = Math.round(defultData.main.feels_like) + " °C";
  });

  getData((defultData) => {
    humidity.innerHTML = defultData.main.humidity + "%";
  });
  getData((defultData) => {
    airpressure.innerHTML = Math.round(defultData.wind.speed * 3.6) + "km/h";
  });

  getData((defultData) => {
    weatherType.innerHTML = defultData.weather[0].main;
    if (weatherType.innerHTML === "Smoke") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-smog"></i>`;
    } else if (weatherType.innerHTML === "Clear") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else if (weatherType.innerHTML === "Rain") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud-showers-water"></i>`;
    } else if (weatherType.innerHTML === "Clouds") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
    } else if (weatherType.innerHTML === "Drizzle") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
    } else if (weatherType.innerHTML === "Haze") {
      conditionOfWeather.innerHTML = `<i class="fa-solid fa-water"></i>`;
    }
  });
  getData((defultData) => {
    console.log(defultData);
  });
});

// for searching
function searching() {
  var searchbar = document.getElementById("input").value;

  let getData = (cb) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchbar}&appid=${apikey}&units=metric`
    )
      .then((res) => res.json())
      .then((res) => cb(res));
  };
  getData((defultData) => {
    console.log(defultData);

    let weatherCheack = defultData.weather[0].main;

    if (weatherCheack === "Haze") {
      weatherImage.style.backgroundImage = "url(images/haze.png)";
    } else if (weatherCheack === "Clouds") {
      weatherImage.style.backgroundImage = "url(./images/clouds.png)";
    } else if (weatherCheack === "Rain") {
      weatherImage.style.backgroundImage = "url(./images/rain.png)";
    } else if (weatherCheack === "Clear") {
      weatherImage.style.backgroundImage = "url./images/clear.png)";
    } else if (weatherCheack === "Smoke") {
      weatherImage.style.backgroundImage = "url(./images/smk.png)";
    } else if (weatherCheack === "Drizzle") {
      weatherImage.style.backgroundImage = "url./images/drizzling.png)";
    }
  });

  getData((data) => {
    cityName.innerHTML = data.name;
  });

  getData((data) => {
    temp.innerHTML = Math.round(data.main.temp) + " °C";
  });

  getData((data) => {
    humidity.innerHTML = data.main.humidity + "%";
  });

  getData((data) => {
    airpressure.innerHTML = Math.round(data.wind.speed * 3.6) + "km/h";
  });

  getData((data) => {
    weatherType.innerHTML = data.weather[0].main;
    if (weatherType.innerHTML === "Smoke") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-smog"></i>`;
      } else if (weatherType.innerHTML === "Clear") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      } else if (weatherType.innerHTML === "Rain") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud-showers-water"></i>`;
      } else if (weatherType.innerHTML === "Clouds") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud"></i>`;
      } else if (weatherType.innerHTML === "Drizzle") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
      } else if (weatherType.innerHTML === "Haze") {
        conditionOfWeather.innerHTML = `<i class="fa-solid fa-water"></i>`;
      }
  });
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searching();
    this.blur();
  }
});

let date = new Date().toString()
let finalDate = date.slice(0,24)

time.innerHTML += "Date and Time: " + finalDate;