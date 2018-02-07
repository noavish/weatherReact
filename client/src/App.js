import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import SearchForm from './SearchForm.js';
import WeatherListBox from './WeatherListBox.js';
import axios from "axios";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {cities: []};
        this.updateCities = this.updateCities.bind(this);
        this.updateComments = this.updateComments.bind(this);
        this.deleteCity = this.deleteCity.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.addCityToDB = this.addCityToDB.bind(this);
    }

    componentDidMount(){
        var url = `/cities`;
        axios.get(url)
            .then(response => {
                this.setState({cities: response.data});
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }


    updateCities(city){
        this.setState((prevState, props)=>{
            return {cities:[...prevState.cities, city]};
        },()=>{
            console.log(this.state.cities);
        });
    }

    updateComments(comment, cityID) {
        axios({
            method: 'PUT',
            url: `/updateComments/${cityID}`,
            data: {comment}
        })
        .then(response => {
            console.log(response.data.comments);
            this.setState(prevState => {
                return {cities: prevState.cities.map((city, i)=>{
                        if (city._id == cityID){
                            let updatedCity = {...city};
                            updatedCity.comments = response.data.comments;
                            return updatedCity;
                        }
                        return  city;
                    })
                };
            });
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    deleteCity(cityID){
        var url = `/${cityID}`;
        axios.delete(url)
            .then(response => {
                console.log(response);
                this.setState(prevState => ({
                    cities: prevState.cities.filter((item) => {
                       return item._id !== cityID
                    })
                }),()=>{
                    console.log(this.state)
                });

            });
    }

    deleteComment(cityID, commentID){
        var url = `/${cityID}/deleteComment/${commentID}`;
        axios.delete(url)
            .then(response => {
                console.log(response.data.comments);
                this.setState(prevState => {
                    return {cities: prevState.cities.map((city, i)=>{
                            if (city._id == cityID){
                                let updatedCity = {...city};
                                updatedCity.comments = response.data.comments;
                                return updatedCity;
                            }
                            return  city;
                        })
                    };
                });
            })
    }

    addCityToDB(cityName){
        var cityDB = {
            name: cityName,
            comments: []
        };
        axios({
            method: 'POST',
            url: '/cityDB',
            data: cityDB
        })
            .then(response => {
                console.log(`${response.data.name} was added to DB`);
                var city = {
                    name: response.data.name,
                    comments: response.data.comments,
                    _id: response.data._id
                }
                this.setState({cities: this.state.cities.concat(city)},()=>{
                    console.log(this.state.cities);
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <div className="App container">
                <div className='header row'>
                    <div className='col-12'>
                        <h2> Weather </h2>
                    </div>
                    <div className='col-12'>
                        <SearchForm addCityToDB={this.addCityToDB}/>
                    </div>
                </div>
                <div className='list row'>
                    <WeatherListBox cities={this.state.cities} updateComments={this.updateComments} deleteCity={this.deleteCity} deleteComment={this.deleteComment}/>
                </div>
            </div>
        );
    }
}

export default App;
