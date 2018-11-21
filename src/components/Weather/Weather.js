import React, { Component } from "react";
import './Weather.scss';
import Form from "./Form";
import Info from './Info';

const API_KEY = "136fc1289216818c65293da203a8d841";

class Weather extends Component {

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data = await api_url.json();
        console.log(data);
    };

    render() {
        return(
            <div className="weather">
                <div className="weather__box">
                    <h3>Weather app</h3>
                    <Form getWeather={this.gettingWeather} />
                    <Info/>
                </div>
            </div>
        );
    };
};

export default Weather;