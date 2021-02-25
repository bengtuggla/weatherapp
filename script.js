import {getData, buildDate} from './functions.js' 

/* getData('Skärblacka')
.then(data=>console.log(data)) */

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const city = document.querySelector('.city')

//FUNKTIONER
const displayResults = data => {
  city.innerText = `${data.name}, ${data.sys.country} `

  const date = document.querySelector('.date');
  let now = new Date();
  date.innerText = buildDate(now);

  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}<span>&degC</span>`;
  document.querySelector('.icon').style.background = `url("http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png")`
  document.querySelector('.weather').innerText = `${data.weather[0].main}`
  document.querySelector('.hi-lo').innerHTML = `${Math.round(data.main.temp_max)}&degC /${Math.round(data.main.temp_min)}&degC`
}

form.addEventListener('submit', e=> {
   e.preventDefault();

   getData(input.value)
   .then(data => {
    console.log(data);
    displayResults(data);
   })

} )

window.addEventListener('load', ()=> {
 let lat;
 let lon;
 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(pos => {
   lat = pos.coords.latitude;
   lon = pos.coords.longitude

   const apiKey = '1fd8c504e22843c19b741abda9e708b9';
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
   .then(res => res.json())
   .then(data => {
    displayResults(data)
   })
  })
 }else{
  city.innerText = 'Sorry, Your geolocation not found'
 }
})