import React, { Component } from 'react';
import CommentForm from './CommentForm.js';
import CommentsListBox from './CommentsListBox.js';
import 'font-awesome/css/font-awesome.min.css';


function IconImage(icon){
    return <img src={`http://openweathermap.org/img/w/${icon}.png`}/>;
}

class WeatherBox extends React.Component{

    render(){
        return(
            <li className='city-box' data-id={this.props.index}>
                <div> {IconImage(this.props.icon)} </div>
                <h4> {this.props.name} </h4>
                <p> {this.props.description} - {this.props.temp} | {this.props.unit} </p>
                <CommentForm index={this.props.index} updateComments={this.props.updateComments}/>
                <CommentsListBox cityIndex={this.props.index} cities={this.props.cities}/>
            </li>
        );
    }
}

export default WeatherBox;


