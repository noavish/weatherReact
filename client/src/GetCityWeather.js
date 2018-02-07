// import React, { Component } from 'react';
// import axios from 'axios';
//
// function GetCityWeather(searchTerm) {
//     var url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=8ebb385c56cb162f0265a7de786cfeb1&units=metric`
//         axios.get(url) //<==Calling axios with a get request and pass the url
//             .then(response => {
//                 var city = {
//                     name: searchTerm,
//                     description: response.data.weather[0].description,
//                     temp: response.data.main.temp,
//                     unit: 'C',
//                     icon: response.data.weather[0].icon,
//                     comments: []
//                 };
//             })
//             .catch(error => {
//                 console.log('Error fetching and parsing data', error);
//             });
//     }
// }
//
// export default GetCityWeather;

//
// handleSubmit(searchTerm){
//     var url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=8ebb385c56cb162f0265a7de786cfeb1&units=metric`
//     axios.get(url) //<==Calling axios with a get request and pass the url
//         .then(response => {
//             var city = {
//                 name: response.data.name,
//                 description: response.data.weather[0].description,
//                 temp: response.data.main.temp,
//                 unit: 'C',
//                 icon: response.data.weather[0].icon,
//                 comments: []
//             };
//             this.props.updateCities(city);
//         })
//         .catch(error => {
//             console.log('Error fetching and parsing data', error);
//         });
// }