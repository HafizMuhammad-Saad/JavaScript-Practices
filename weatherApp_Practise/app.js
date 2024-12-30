const cityInputEle = document.getElementById('city');

async function checkWeather() {
    event.preventDefault();
    try {
        if (cityInputEle.value.trim !== '') {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEle.value}&appid=de0b7b903fe961855fdb0985a905afdb`
            let fetchWeather = await fetch(weatherUrl)
            console.log(fetchWeather);
            cityInputEle.value = ''
            
            if (!fetchWeather.ok && fetchWeather.statusText === 'Not Found') {
                alert('City not found')
            } else {
                let weatherJson = await fetchWeather.json()
                displayWeather(weatherJson)

            }
        } else {
            alert('Please Enter any city name')
        }
    } catch (error) {
        console.log(error);
        
    }
}

function displayWeather(weatherData) {
    console.log(weatherData);
    
    // document.getElementById('weatherIcon').src = weatherIconUrl;
   
    
  
    let weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    document.getElementById('weatherInfo').innerHTML = 
    `
          <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card weather-card">
          <div class="card-body">
            <div class="text-center">
              <img src="${weatherIconUrl}" alt="${weatherData.weather[0].description}" width="150px">
              <h3 class="card-title mt-2">${weatherData.name}, ${weatherData.sys.country}</h3>
              <p class="card-text text-muted">${weatherData.weather[0].description.toUpperCase()}</p>
              <h4 class="card-text highlight">${Math.floor(weatherData.main.temp - 273.15)}°C</h4>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-6">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Humidity:</strong> ${weatherData.main.humidity}%</li>
                  <li class="list-group-item"><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</li>
                  <li class="list-group-item"><strong>Coordinates:</strong> ${weatherData.coord.lat}, ${weatherData.coord.lon}</li>
                </ul>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-6">
                <p><strong>Sunrise:</strong> ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div class="col-sm-6">
                <p><strong>Sunset:</strong> ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    `


    //     `
    //     <div class="card weather-card p-3" id="backgroundIcon">
    //         <div class="text-center">
    //             <img src="${weatherIconUrl}" width="150px">
    //             <i class="" id="icon-weather"></i>
    //             <h3 class="mt-2 highlight">${weatherData.name}, ${weatherData.sys.country}</h3>
    //             <p class="text-muted">${weatherData.weather[0].description.toUpperCase()}</p>
    //             <h4 class="highlight">${Math.floor(weatherData.main.temp - 273.15)}°C</h4>
    //         </div>
    // <hr>
    //         <div class="row mt-3">
    //             <div class="col-6">
    //                 <p><strong>Humidity:</strong> ${weatherData.main.humidity}%</p>
    //                 <p><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</p>
    //             </div>
    //             <div class="col-6">
    //                 <p><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</p>
    //                 <p><strong>Coordinates:</strong> ${weatherData.coord.lat}, ${weatherData.coord.lon}</p>
    //             </div>
    //         </div>

    //         <div class="text-center mt-3">
    //             <p><strong>Sunrise:</strong> ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
    //             <p><strong>Sunset:</strong> ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
    //         </div>
    //     </div>
    // `;

    

    // let backgroundImage = document.getElementById('body');
    // let backgroundIcon = document.getElementById('body');
    console.log(backgroundIcon);
    // if (weatherData.weather[0].main.toLowerCase() === "clouds") {
    //     iconWeather.className = 'fas fa-cloud-sun weather-icon'
    //     backgroundImage.style.backgroundImage = 'url(clouds.jpg)'
    //     backgroundImage.style.backgroundSize = 'cover'
    //     backgroundImage.style.backgroundPosition = 'center'

        
    // }
    // if (weatherData.weather[0].main.toLowerCase() === "haze") {
    //     console.log('haze');
    //     iconWeather.className = 'fas fa-smog weather-icon'
    //     backgroundImage.style.backgroundImage = 'url(haze.jpg)'
    //     backgroundImage.style.backgroundSize = 'cover'
    // }

    // if (weatherData.weather[0].main.toLowerCase() === "clear") {
    //     console.log('clear');
    //     iconWeather.className = 'fas fa-cloud-moon weather-icon'
    //     backgroundImage.style.backgroundImage = 'url(haze.jpg)'
    //     backgroundImage.style.backgroundSize = 'cover'
    // }

   
}
