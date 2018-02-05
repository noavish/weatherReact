import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import WeatherListBox from './WeatherListBox.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App container">
                <div className='header row'>
                  <h1> Weather </h1>
                  <SearchForm />
                </div>
                <div className='list row'>
                  <WeatherListBox />
                </div>
            </div>
        );
    }
}

export default App;
