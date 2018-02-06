import React, { Component } from 'react';
import axios from 'axios'
// import FormButton from './FormButton.js';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {city: ''};
    }

    onChange(e){
        this.setState({city: e.target.value});
    }

    onClick(){
        console.log(this.state.city);
        var searchTerm = this.state.city;
        this.handleSubmit(searchTerm);
    }

    handleSubmit(searchTerm){
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=8ebb385c56cb162f0265a7de786cfeb1&units=metric`
        axios.get(url) //<==Calling axios with a get request and pass the url
            .then(response => {
                var city = {
                    name: response.data.name,
                    description: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    unit: 'C',
                    icon: response.data.weather[0].icon,
                    comments: []
                };
                this.props.updateCities(city);
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render(){
        return(
            <form action="#" id="getWeatherForm">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={this.onChange}/>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default get-temp" onClick={this.onClick}>Get Temp</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchForm;