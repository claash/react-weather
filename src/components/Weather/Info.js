import React, { Component } from 'react';

class Info extends Component {
	render() {
		return (
			<div>
				{this.props.city && (
					<div className={'weather__info' + ' ' + (this.props.temp < 0 ? 'cold' : 'hot')}>
						<div className="weather__info-position">
							<span>{this.props.city}, </span>
							<span>{this.props.country}</span>
						</div>
						<div className="weather__info-temp">
							<div className="weather__info-temp__curr">
								{Math.round(this.props.temp) > 0 && '+'}
								{Math.round(this.props.temp)}
							</div>
							<div className="weather__info-temp__minMax">
								<span>Min: {this.props.tempMin}</span>
								<span>Max: {this.props.tempMax}</span>
							</div>
						</div>
						<div className="weather__info-conditional">{this.props.conditional}</div>
					</div>
				)}
				<p className="error">{this.props.error}</p>
			</div>
		);
	}
}

export default Info;
