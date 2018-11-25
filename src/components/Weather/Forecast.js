import React, { Component } from "react";
import './Forecast.scss';

class Forecast extends Component {
    render() {
        let forecastItem;
        
        if (this.props.forecast) {
            forecastItem = this.props.forecast.map(function (day) {

                let timestamp = day.dt;
                let date = new Date(timestamp * 1000);
                let dateDay = date.getDay();
                let dateDate = date.getDate();
                let dateMonth = date.getMonth();

                let weekday = new Array(7);
                weekday[0] = "Sun";
                weekday[1] = "Mon";
                weekday[2] = "Tue";
                weekday[3] = "Wed";
                weekday[4] = "Thu";
                weekday[5] = "Fri";
                weekday[6] = "Sat";

                return(
                    <li className="weather__forecast-day">
                        <div className="weather__forecast-day__date">
                            <span>
                                {weekday[dateDay]}
                            </span>
                            <span>
                                {dateDate + '.' + dateMonth}
                            </span>
                        </div>
                        <div className="weather__forecast-day__temp">
                            <span>
                                Min: 
                                {Math.round(day.temp.min) > 0 && "+"}
                                {Math.round(day.temp.min)}
                                </span>
                            <label>{day.weather[0].main}</label>
                            <span>
                                Max: 
                                {Math.round(day.temp.max) > 0 && "+"}
                                {Math.round(day.temp.max)}
                                </span>
                        </div>
                    </li>
                );
            });
        }

        return <ul className="weather__forecast">{forecastItem}</ul>;
    };
};

export default Forecast;