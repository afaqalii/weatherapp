const Searchbtn = document.querySelector('.Searchbtn')
const SearchBar = document.querySelector('.search-bar')
const city = document.querySelector('.city')
const tempreture = document.querySelector('.temp')
const icon = document.querySelector('.logo')
const description = document.querySelector('.description')
const humidityFielf = document.querySelector('.humidity')
const WindSpeed = document.querySelector('.wind')
let target = SearchBar

async function fetchData() {
    const url = `https://api.weatherapi.com/v1/current.json?key=db87dcffc3b949ca888174239221507&q=${target.value}&aqi=no`
    const response = await fetch(url)
    const data = await response.json()
    const {
        current:{temp_c,
        condition:{ text,icon},humidity,wind_kph},
        location: {name},
    } = data
    console.log(data)
    UpdateDom(temp_c,name,icon,text,humidity,wind_kph)
}
function UpdateDom(temp,City,Icon,Text,Humidity,Wind) {
     tempreture.innerHTML = temp + "°C"
     city.innerHTML = `Weather in ${City}`
     icon.src = Icon
     description.innerHTML = Text
     humidityFielf.innerHTML = `Humidity: ${Humidity}%`
     WindSpeed.innerHTML =  `Wind Speed: ${Wind} km/h` 

    }
fetchData()

