const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34707cb6d6mshed7df8a11f6d2d0p1cefa7jsn12e6ae1d1e0e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getCity = (city_search) => {
  document.getElementById("cityName").innerHTML = city_search;
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city_search,options)
    .then((response) => response.json())
    .then((response) => {
		console.log(response)
		document.getElementById("temp").innerHTML = response.temp
        document.getElementById("feels_like").innerHTML = response.feels_like
        document.getElementById("humidity").innerHTML = response.humidity
        document.getElementById("min_temp").innerHTML = response.min_temp
        document.getElementById("max_temp").innerHTML = response.max_temp
        document.getElementById("wind_speed").innerHTML = response.wind_speed
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees
        document.getElementById("sunrise").innerHTML = response.sunrise
        document.getElementById("sunset").innerHTML = response.sunset
	})
	.catch(err => console.error(err));
};

submit = document.getElementById("submit");

if(submit){
	document.getElementById("submit").addEventListener("click", (e)=>{
		e.preventDefault();
		getCity(document.getElementById("city").value);
	})
}

getCity("Delhi")
// try {
// 	const response = fetch(url, options);
// 	// const result = response.text();
// 	console.log(response);
// } catch (error) {
// 	console.error(error);
// }
