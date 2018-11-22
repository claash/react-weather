import React, { Component } from 'react';
import './Weather.scss';
import Form from './Form';
import Info from './Info';

const API_KEY = '136fc1289216818c65293da203a8d841';
navigator.geolocation.getCurrentPosition(function(position) {
	console.log(position.coords.latitude, position.coords.longitude);
	const COORD_LAT = position.coords.latitude;
	const COORD_LON = position.coords.longitude;
});

class Weather extends Component {
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		error: undefined
	};

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;

		if (city) {
			const api_url_name = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);
			const data = await api_url_name.json();

			if (data.cod === '404') {
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
					country: data.sys.country,
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,
					conditional: data.weather[0].main,
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
				error: 'Enter city name'
			});
		}
	};

	render() {
		return (
			<div className="weather">
				<div className="weather__box">
					<h3>Weather app</h3>
					<Form getWeather={this.gettingWeather} />
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
					/>
				</div>
			</div>
		);
	}
}

export default Weather;
