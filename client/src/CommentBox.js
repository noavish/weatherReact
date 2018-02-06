import React, { Component } from 'react';

class CommentBox extends React.Component {
    render(){
        return(
            <li>Written by: {this.props.user} - {this.props.comment} <span> Delete </span></li>
        );
    }
}

export default CommentBox;