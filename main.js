let weather = {
    "apiKey": "863a1272b9f402f2a469618fc396133f",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
            )
                .then((response) => response.json())
                .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
       const { name } = (data);
       const { description } = data.weather;
       const {temp, humidity} = data.main;
       const{ speed } = data.wind;
       console.log(name, description, temp, humidity, speed)
       document.querySelector(".city").innerText = "Weather in" + name;

       document.querySelector(".description").innerText = description;
       document.querySelector(".temp").innerText = temp + " °C";
       document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
       document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);

    }
};

document
.querySelector(".search button")
.addEventListener("click", function (){
    weather.search()

});