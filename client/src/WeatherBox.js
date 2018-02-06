import React, { Component } from 'react';
import CommentForm from './CommentForm.js';
import CommentsListBox from './CommentsListBox.js';
import 'font-awesome/css/font-awesome.min.css';


function IconImage(icon){
    return <img src={`http://openweathermap.org/img/w/${icon}.png`}/>;
}

class WeatherBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {cityIndex: this.props.cityIndex};
        this.onClickDeleteCity = this.onClickDeleteCity.bind(this);
    }

    onClickDeleteCity(){
        this.props.deleteCity(this.state.cityIndex);
    }

    render(){
        return(
            <li className='city-box' data-id={this.props.index}>
                <div> {IconImage(this.props.icon)} </div>
                <h4> {this.props.name} <span><button type='button' onClick={this.onClickDeleteCity}>Delete</button></span></h4>
                <p> {this.props.description} - {this.props.temp} | {this.props.unit} </p>
                <CommentForm cityIndex={this.props.cityIndex} updateComments={this.props.updateComments}/>
                <CommentsListBox comments={this.props.comments} cityIndex={this.props.cityIndex} deleteComment={this.props.deleteComment}/>
            </li>
        );
    }
}

export default WeatherBox;


