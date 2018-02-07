import React, { Component } from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {user: '', comment: ''};
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    onClick(e){
        e.preventDefault();
        var comment = {
            user: this.state.user,
            comment: this.state.comment
        };
        this.props.updateComments(comment, this.props.cityID);
        this.setState({user: '', comment: ''});
    }

    render(){
        return(
            <form action="#" id="commentForm">
                <div className="input-group">
                    <div><input type="text" className="form-control comment-input" id="user" placeholder="Visitor" required value={this.state.user} onChange={this.onChange}/></div>
                    <div><input type="text" className="form-control comment-input" id="comment" placeholder="Enter Comment" required value={this.state.comment} onChange={this.onChange}/></div>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary post-comment" onClick={this.onClick}>Submit</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default CommentForm;