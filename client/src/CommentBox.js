import React, { Component } from 'react';

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {commentIndex: this.props.commentIndex};
        this.onClickDeleteComment = this.onClickDeleteComment.bind(this);
    }

    onClickDeleteComment(){
        this.props.deleteComment(this.props.cityIndex, this.props._id);
    }

    render(){
        return(
            <li className='comment-li'>Written by: {this.props.user} - {this.props.comment} <span> <button type='button' className="btn deletebtn deleteComment" onClick={this.onClickDeleteComment}><i className="fa fa-trash"></i></button> </span></li>
        );
    }
}

export default CommentBox;