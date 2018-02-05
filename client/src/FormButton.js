import React, { Component } from 'react';

class FormButton extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        console.log(this.props.city);
        this.state.searchCity(this.state);
    }

    render(){
        return(
            <div class="input-group-btn submit-btn-div">
                <button type="button" className="btn btn-default get-temp">Get Temp</button>
            </div>
        );
    }
}

export default FormButton;