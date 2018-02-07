import React, { Component } from 'react';
import CommentBox from './CommentBox';

class CommentsListBox extends React.Component {

    createComments() {
        return this.props.comments.map((comment, index)=>{
            return <CommentBox key={comment._id} commentIndex={comment._id} cityIndex={this.props.cityIndex} {...comment} deleteComment={this.props.deleteComment}/>
        });
    }

    render(){
        return(
            <ul className='commentsUL'>
                {this.createComments()}
            </ul>
        );
    }
}

export default CommentsListBox;