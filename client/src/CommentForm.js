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

    onClick(){
        var comment = {
            user: this.state.user,
            comment: this.state.comment
        };
        this.props.updateComments(comment, this.props.cityIndex);
    }

    render(){
        return(
            <form action="#" id="commentForm">
                <div className="input-group">
                    <input type="text" className="form-control" id="user" placeholder="Visitor" required value={this.state.user} onChange={this.onChange}/>
                    <input type="text" className="form-control" id="comment" placeholder="Enter Comment" required value={this.state.comment} onChange={this.onChange}/>
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default post-comment" onClick={this.onClick}>Submit</button>
                    </span>
                </div>
            </form>
        );
    }
}

export default CommentForm;