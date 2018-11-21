import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <form className="weather__form" onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"/>
                <button>Get weather</button>
            </form>
        );
    };
};

export default Form;