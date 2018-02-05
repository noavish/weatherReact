import React, { Component } from 'react';
import FormButton from './FormButton.js';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {city: []};
    }

    onChange(e){
        this.setState({city: e.target.value});
        console.log(this.state);
    }

    searchCity(){

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
                        <FormButton onClick={this.onClick}/>
                    </span>
                </div>
            </form>
        );
    }
}

export default SearchForm;