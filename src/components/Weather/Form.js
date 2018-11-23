import React, { Component } from "react";

import currentSvg from "./current.svg";

class Form extends Component {
    render() {
        return <div className="weather__form-wrapper">
						<form className="weather__form" onSubmit={this.props.getWeather}>
							<input type="text" name="city" placeholder="City" />
							<button>Get weather</button>
						</form>
                        <button className="weather__form-current" onClick={this.props.gettingWeatherCoords}>
							<img src={currentSvg} />
						</button>
					</div>;
    };
};

export default Form;