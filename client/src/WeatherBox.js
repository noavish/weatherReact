import React, { Component } from 'react';
import CommentForm from './CommentForm.js';
import CommentsListBox from './CommentsListBox.js';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios/index";

class WeatherBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {city: {}};
        this.onClickDeleteCity = this.onClickDeleteCity.bind(this);
    }

    componentDidMount(){
        this.fetchWeatherFromAPI();
    }

    fetchWeatherFromAPI(){
        var url = `http://api.apixu.com/v1/current.json?key=6c5bd37454274dc381a152907180502&q=${this.props.name}`
        // var url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=8ebb385c56cb162f0265a7de786cfeb1&units=metric`;//<==Calling axios with a get request and pass the url
        axios.get(url)
            .then((res)=> {
                console.log(res);
                this.addWeatherToState(res);
            })
            .catch(()=> {
                console.log('API failed');
            });
    }

    addWeatherToState(response){
        var city = {
            name: response.data.location.name,
            country: response.data.location.country,
            description: response.data.current.condition.text,
            temp: response.data.current.temp_c,
            unit: 'C',
            feelslike_c: response.data.current.feelslike_c,
            icon: response.data.current.condition.icon,
            comments: []
        };
        this.setState({city});
        console.log(this.state);
    };

    onClickDeleteCity(){
        this.props.deleteCity(this.props.cityIndex);
    }


    render(){
        return(
            <li className='col-4 city-list-item' data-id={this.props.index}>
                <div className='city-box'>
                    <div> <img src={this.state.city.icon}/> </div>
                    <h4> {this.state.city.name}, {this.state.city.country} <span><button type='button' className="btn deletebtn deleteCity" onClick={this.onClickDeleteCity}><i className="fa fa-trash"></i></button></span></h4>
                    <p> {this.state.city.description} | {this.state.city.temp} &#8451; </p>
                    <p> Feels liks: {this.state.city.feelslike_c}&#8451; </p>
                    <CommentForm cityID={this.props._id} updateComments={this.props.updateComments}/>
                    <CommentsListBox comments={this.props.comments} cityIndex={this.props.cityIndex} deleteComment={this.props.deleteComment}/>
                </div>
            </li>
        );
    }
}

export default WeatherBox;


