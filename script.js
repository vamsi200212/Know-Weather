const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34707cb6d6mshed7df8a11f6d2d0p1cefa7jsn12e6ae1d1e0e",
    "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
  },
};

const getCity = (city_search) => {
  document.getElementById("cityName").innerHTML = city_search;
  fetch("https://openweather43.p.rapidapi.com/weather?q=" + city_search,options)
    .then((response) => response.json())
    .then(response => {
      console.log(response)
      document.getElementById("temp").innerHTML = response.main.temp
      document.getElementById("feels_like").innerHTML = response.main.feels_like
      document.getElementById("humidity").innerHTML = response.main.humidity
      document.getElementById("max_temp").innerHTML = response.main.temp_max
      document.getElementById("min_temp").innerHTML = response.main.temp_min
      document.getElementById("wind_speed").innerHTML = response.wind.speed
      document.getElementById("wind_degrees").innerHTML = response.wind.deg
      document.getElementById("sunrise").innerHTML = response.sys.sunrise
      document.getElementById("sunset").innerHTML = response.sys.sunset
    })
    .catch(err => console.error(err));
  //   .then((response) => {
	// 	console.log(response)
	// 	document.getElementById("temp").innerHTML = response.temp
  //       document.getElementById("feels_like").innerHTML = response.feels_like
  //       document.getElementById("humidity").innerHTML = response.humidity
  //       document.getElementById("min_temp").innerHTML = response.min_temp
  //       document.getElementById("max_temp").innerHTML = response.max_temp
  //       document.getElementById("wind_speed").innerHTML = response.wind_speed
  //       document.getElementById("wind_degrees").innerHTML = response.wind_degrees
  //       document.getElementById("sunrise").innerHTML = response.sunrise
  //       document.getElementById("sunset").innerHTML = response.sunset
	// })
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
