import React, { Component } from 'react';

class FormButton extends React.Component{
    render(){
        return(
            <div class="input-group-btn submit-btn-div">
                <button type="button" class="btn btn-primary btn-default get-temp">Get Temp</button>
            </div>
        );
    }
}

export default FormButton;