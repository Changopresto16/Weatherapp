let weather = {
	apiKey: '863a1272b9f402f2a469618fc396133f',
	fetchWeather: function (city) {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=imperial&appid=' +
				this.apiKey
		)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data;
		const { description } = data.weather[0];
		const { temp, humidity, temp_min, temp_max } = data.main;
		const { speed } = data.wind;
		console.log(name, description, temp, temp_min, temp_max, humidity, speed);
		document.querySelector('.city').innerText = name;
		document.querySelector('.description').innerText = description;
		document.querySelector('.temp').innerText = temp + ' °F';
        document.querySelector('.temp_min').innerText = 'Min ' + temp_min + ' °F';
        document.querySelector('.temp_max').innerText = 'Max ' + temp_max + ' °F';
		document.querySelector('.humidity').innerText =
			'Humidity: ' + humidity + '%';
		document.querySelector('.wind').innerText =
			'Wind Speed: ' + speed + ' km/h';
	},
	search: function () {
		this.fetchWeather(document.querySelector('.search-bar').value);
	},
};

document.querySelector('.search button').addEventListener('click', function () {
	weather.search();
});

document
	.querySelector('.search-bar')
	.addEventListener('keyup', function (event) {
		if (event.key == 'Enter') {
			weather.search();
		}
	});

weather.fetchWeather('Denver');
