let country = document.getElementById('countryInput')
let city = document.getElementById('cityInput')


async function prayer() {
    try {
        
        let countryName = country.value
        let cityName = city.value
        
        const url = `https://api.aladhan.com/v1/calendarByCity?country=${countryName}&city=${cityName}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        // displayDate(data.data[0].date.hijri.date)
        // Display the prayer times in the console
        displayPrayerTimes(data.data[0].timings)

        
    } catch (error) {
        console.log(error);
        
    }
}

// Display the prayer times on the webpage

let prayerTimesElement = document.getElementById('prayerTimes')
function displayPrayerTimes(prayerTimes) {
    prayerTimesElement.innerHTML = `
        <h2>Prayer Times</h2>
        <ul>
            <li>Fajr: ${prayerTimes.Fajr}</li>
            <li>Sunrise: ${prayerTimes.Sunrise}</li>
            <li>Dhuhr: ${prayerTimes.Dhuhr}</li>
            <li>Asr: ${prayerTimes.Asr}</li>
            <li>Sunset: ${prayerTimes.Sunset}</li>
            <li>Maghrib: ${prayerTimes.Maghrib}</li>
            <li>Isha: ${prayerTimes.Isha}</li>
        </ul>
    `
}

document.getElementById('displayPrayerBtn').addEventListener('click', prayer)
// Display Date

// let dateElement = document.getElementById('date')
// function displayDate(date) {
//     dateElement.innerHTML = `
//         <h2>Current Date</h2>
//         <p>${date}</p>
//     `
// }

    // function to search for cities in the database using the current date and time in the database using the current time     
    
    




