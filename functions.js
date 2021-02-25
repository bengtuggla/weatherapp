
const apiKey = '1fd8c504e22843c19b741abda9e708b9'

export const getData = async (input) =>{
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`

 const res = await fetch(url);
 const data = await res.json();
 return data;
}

export const buildDate = d => {
 //console.log(d.getMonth()); = Genererar en 1:a för februari. Därför vill vi använda månadsarray
 //console.log(d.getDay()); = genererar en 4:a för torsdag (börjar med söndag = 0)
 let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

 let day = days[d.getDay()];
 let month = months[d.getMonth()];
 let year = d.getFullYear();
 let date = d.getDate()

 return `${day} ${date} ${month} ${year}`
}