import React, { Component } from 'react';
import CommentBox from './CommentBox';

class CommentsListBox extends React.Component {

    createComments() {
        return this.props.cities[this.props.cities[this.props.cityIndex]].comments.map((comment, index)=>{
            <CommentBox key={index} commentIndex={index} cityIndex={this.props.cityIndex} {...comment}/>
        });
    }

    render(){
        return(
            <ul>
                {this.createComments()}
            </ul>
        );
    }
}

export default CommentsListBox;