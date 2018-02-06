import React, { Component } from 'react';

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {commentIndex: this.props.commentIndex};
        this.onClickDeleteComment = this.onClickDeleteComment.bind(this);
    }

    onClickDeleteComment(){
        console.log(this.props.cityIndex, this.state.commentIndex)
        this.props.deleteComment(this.props.cityIndex, this.state.commentIndex);
    }

    render(){
        return(
            <li>Written by: {this.props.user} - {this.props.comment} <span> <button type='button' onClick={this.onClickDeleteComment}>Delete</button> </span></li>
        );
    }
}

export default CommentBox;