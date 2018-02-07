import React, { Component } from 'react';
import WeatherBox from './WeatherBox.js';

class WeatherListBox extends React.Component{
    constructor(props){
        super(props);
    }

    createBoxes() {
        return this.props.cities.map((city, index) =>
            <WeatherBox key={city._id} cityIndex={city._id} {...city} updateComments={this.props.updateComments} deleteCity={this.props.deleteCity} deleteComment={this.props.deleteComment}/>);
    }

    render(){
        return(
            <ul className='cities-list'>
                {this.createBoxes()}
            </ul>
        );
    }
}

export default WeatherListBox;