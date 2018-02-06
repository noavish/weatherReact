import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import WeatherListBox from './WeatherListBox.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {cities: []};
        this.updateCities = this.updateCities.bind(this);
        this.updateComments = this.updateComments.bind(this);

    }

    updateCities(city) {
        this.setState((prevState, props)=>{
            return {cities:[...prevState.cities, city]};
        },()=>{
            console.log(this.state.cities);
        });
    }

    updateComments(comment, cityIndexToUpdate) {
        this.setState((prevState, props) => {
            let updatedComments = prevState.cities[cityIndexToUpdate].comments.concat(comment);
            let updatedCity = {...prevState.cities[cityIndexToUpdate]};
            updatedCity.comments = updatedComments;
            return {cities:[...prevState.cities.filter((value, i)=> i !== cityIndexToUpdate), updatedCity]}
        },
            ()=> console.log(this.state.cities[cityIndexToUpdate].comments));
    }

    render() {
        return (
            <div className="App container">
                <div className='header row'>
                  <h1> Weather </h1>
                  <SearchForm updateCities={this.updateCities}/>
                </div>
                <div className='list row'>
                  <WeatherListBox cities={this.state.cities} updateComments={this.updateComments}/>
                </div>
            </div>
        );
    }
}

export default App;
