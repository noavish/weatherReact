import React, { Component } from 'react';
import axios from 'axios';
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

    onClick(e){
        e.preventDefault();
        var url = `http://api.apixu.com/v1/current.json?key=6c5bd37454274dc381a152907180502&q=${this.state.city}`
        axios.get(url).then((response)=>{
            var cityName = response.data.location.name;
            this.props.addCityToDB(cityName);
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
        this.setState({city: ''});
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
                        <button type="submit" className="btn btn-primary get-temp" onClick={this.onClick}>Get Temp</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchForm;