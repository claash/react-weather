import React, { Component } from 'react';
import currentSvg from './current.svg';
import Forecast from './Forecast';

class Info extends Component {
	render() {
		return <div>
				{this.props.city && <div className={"weather__info" + " " + (this.props.temp < 0 ? "cold" : "hot")}>
						{this.props.current}
						{this.props.current && 
                            <img className="weather__info-current" src={currentSvg} />
                        }
						<div className="weather__info-position">
							<span>{this.props.city}, </span>
							<span>{this.props.country}</span>
						</div>
						<div className="weather__info-temp">
							<div className="weather__info-temp__curr">
								{Math.round(this.props.temp) > 0 && "+"}
								{Math.round(this.props.temp)}
							</div>
							<div className="weather__info-temp__minMax">
								<span>Min: {this.props.tempMin}</span>
								<span>Max: {this.props.tempMax}</span>
							</div>
						</div>
						<div className="weather__info-conditional">
							{this.props.conditional}
						</div>
						<button onClick={this.props.getForecast}>Weather forecast</button>
						<Forecast forecast={this.props.forecast} />
					</div>}
				<p className="error">{this.props.error}</p>
			</div>;
	}
}

export default Info;
