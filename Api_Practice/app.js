// const url = 'https://jsonplaceholder.typicode.com/todos'
// let cityName = prompt()
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=de0b7b903fe961855fdb0985a905afdb`
// const fetchData = async () => {
//     try {
//         const result = await fetch(`${url}`)
//         const data = await result.json()
//         console.log(data)
//     } catch (error) {
//         console.error(error);
        
//     }
// }
// setTimeout(() => {
//     fetchData()
// }, 3000);


// let API = 'https://jsonplaceholder.typicode.com/todos'

const locationInputElement = document.getElementById('search-input');
const searchBtnElement = document.getElementById('search-button');
const locationElement = document.getElementById('cityName');
const tempratureElement = document.getElementById('temprature');
const descriptionElement = document.getElementById('description');
const humidityEle = document.getElementById('humidity')
const windEle = document.getElementById('wind-speed');
const dayEl = document.getElementById('day')

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  // display the day
  const day = new Date();
  const dayName = days[day.getDay()];
  dayEl.textContent = dayName;
  


function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=de0b7b903fe961855fdb0985a905afdb`
    async function getData() {
        try {
            await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                locationElement.textContent = data.name;
                tempratureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
                descriptionElement.textContent = data.weather[0].description;
                humidityEle.textContent = data.main.humidity;
                windEle.textContent = data.wind.speed;
                // let unix_timestamp = data.sys.sunrise;

// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds
// var date = new Date(unix_timestamp * 1000);

// // Hours part from the timestamp
// var hours = date.getHours();

// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();

// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


// descriptionElement.textContent = formattedTime;

//                 console.log(formattedTime);
                
            })
            .catch((err) => console.log(err))
        } catch (error) {
            
        }
    }
    
    getData()
    // setTimeout(() => {
    // }, 2000);
}

searchBtnElement.addEventListener('click',function() {
    const location = locationInputElement.value;
if (location) {
    fetchWeather(location)
    locationInputElement.value = '';
}
})

