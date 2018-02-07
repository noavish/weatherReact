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
            <li className='comment-li'>Written by: {this.props.user} - {this.props.comment} <span> <button type='button' className="btn deletebtn deleteComment" onClick={this.onClickDeleteComment}><i class="fa fa-trash"></i></button> </span></li>
        );
    }
}

export default CommentBox;