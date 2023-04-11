// e34f4868fb77ae882c526f061f0f99bd api key
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e34f4868fb77ae882c526f061f0f99bd

const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'e34f4868fb77ae882c526f061f0f99bd'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

// let query  back tick -ters tırnak ters kesme süslü tırnak- arasına yazılmalı yoksa url çalışmaz
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

// ters tırnaklara dikkat
const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
   

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)


