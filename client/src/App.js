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
        this.deleteCity = this.deleteCity.bind(this);
        this.deleteComment = this.deleteComment.bind(this);

    }

    updateCities(city) {
        this.setState((prevState, props)=>{
            return {cities:[...prevState.cities, city]};
        },()=>{
            console.log(this.state.cities);
        });
    }

    updateComments(comment, cityIndexToUpdate) {
        this.setState(prevState => {
            return {cities: prevState.cities.map((city, i)=>{
                if (i == cityIndexToUpdate){
                    let updatedComments = city.comments.concat(comment);
                    let updatedCity = {...city};
                    updatedCity.comments = updatedComments;
                    return updatedCity;
                }
                return  city;
                })
            };
        });
    }

    deleteCity(cityIndex){
        this.state.cities.splice(cityIndex, 1);
        this.setState({cities: this.state.cities});
    }

    deleteComment(cityIndex, commentIndex){
        console.log(cityIndex, commentIndex)
        this.state.cities[cityIndex].comments.splice(commentIndex, 1);
        console.log(this.state);
        this.setState({cities: this.state.cities});
    }

    render() {
        return (
            <div className="App container">
                <div className='header row'>
                  <h1> Weather </h1>
                  <SearchForm updateCities={this.updateCities}/>
                </div>
                <div className='list row'>
                  <WeatherListBox cities={this.state.cities} updateComments={this.updateComments} deleteCity={this.deleteCity} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }
}

export default App;
