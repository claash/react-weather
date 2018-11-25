import React, { Component } from 'react';
import './Weather.scss';
import Form from './Form';
import Info from './Info';

const API_KEY = '136fc1289216818c65293da203a8d841';

class Weather extends Component {
	state = {
		temp: undefined,
		city: undefined,
		city_id: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined,
		lat: undefined,
		lon: undefined,
		forecast: undefined,
		current: undefined
	};

	getCurrentPosition = (options = {}) => {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject, options);
		});
	};

	gettingWeatherCoords = async () => {
		const position = await this.getCurrentPosition();

		this.setState({
			forecast: undefined,
			lat: position.coords.latitude,
			lon: position.coords.longitude
		});

		const api_url = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${
				this.state.lat
			}&lon=${this.state.lon}&appid=${API_KEY}&units=metric`
		);

		const data = await api_url.json();

		this.setState({
			temp: data.main.temp,
			tempMin: data.main.temp_min,
			tempMax: data.main.temp_max,
			city: data.name,
			city_id: data.id,
			country: data.sys.country,
			sunrise: data.sys.sunrise,
			sunset: data.sys.sunset,
			conditional: data.weather[0].main,
			current: true,
			forecast: undefined,
			error: undefined
		});
	};

	gettingWeather = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if (city) {
			const api_url = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);
			const data = await api_url.json();

			if (data.cod === "404") {
				this.setState({
					city: undefined,
					error: data.message
				});
			} else {
				this.setState({
					temp: data.main.temp,
					tempMin: data.main.temp_min,
					tempMax: data.main.temp_max,
					city: data.name,
					city_id: data.id,
					country: data.sys.country,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					conditional: data.weather[0].main,
					current: false,
					forecast: undefined,
					error: undefined
				});
			}
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				sunrise: undefined,
				sunset: undefined,
				error: "Enter city name"
			});
		}
	};

	weatherForecast = async () => {
		const api_url = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${this.state.city_id}&appid=${API_KEY}&units=metric&cnt=7`);
		const data = await api_url.json();

		this.setState({
			forecast: data.list
		});
	};

	componentDidMount() {
		this.gettingWeatherCoords();
	}

	render() {
		return (
			<div className="weather">
				<div className="weather__box">
					<h3>Weather app</h3>
					<Form
						gettingWeatherCoords={this.gettingWeatherCoords}
						getWeather={this.gettingWeather}
					/>
					<Info
						temp={this.state.temp}
						tempMin={this.state.tempMin}
						tempMax={this.state.tempMax}
						city={this.state.city}
						country={this.state.country}
						sunrise={this.state.sunrise}
						sunset={this.state.sunset}
						conditional={this.state.conditional}
						error={this.state.error}
						current={this.state.current}
						getForecast={this.weatherForecast}
						forecast={this.state.forecast}
					/>
				</div>
			</div>
		);
	}
}

export default Weather;
