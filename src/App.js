import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Weather from './components/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;
