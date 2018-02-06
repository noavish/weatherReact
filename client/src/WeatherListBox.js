import React, { Component } from 'react';
import WeatherBox from './WeatherBox.js';


class WeatherListBox extends React.Component{
    constructor(props){
        super(props);
    }

    createBoxes() {
        return this.props.cities.map((city, index) =>
            <WeatherBox key={index} cityIndex={index} {...city} updateComments={this.props.updateComments}/>);
    }

    render(){
        return(
            <ul>
                {this.createBoxes()}
            </ul>
        );
    }
}

export default WeatherListBox;