import React, { Component } from 'react';
import FormButton from './FormButton.js';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchTerm: this.state.city};
    }

    onChange(e){
        this.setState({searchTerm: e.target.searchTerm});
    }

    render(){
        return(
            <div class="input-group">
                <input type="text" class="form-control" id="city" placeholder="Enter City" content={this.state.city}/>
                <FormButton onClick={this.onClick}/>
            </div>
        );
    }
}

export default SearchForm;