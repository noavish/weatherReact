import React, { Component } from 'react';

class CommentBox extends React.Component {
    render(){
        return(
            <li>{this.props.user} | {this.props.comment} </li>
        );
    }
}

export default CommentBox;