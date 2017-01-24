import React from 'react'
import Mailto from 'react-mailto'
import './Comments.scss'
var Remarkable = require('remarkable')
import Select from 'react-select'

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable()
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="comment">
                <span className="comment-author">
                    <Mailto email={this.props.email}>{this.props.author}</Mailto> said
                </span>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
})

var CommentBox = React.createClass({
    handleCommentSubmit: function(comment){
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment])
        this.setState({data: newComments})
    },
    getInitialState: function() {
        return {data: this.props.data || []}
    },
    render: function(){
        return (
            <div className="comment-component">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
})

var CommentList = React.createClass({
    render: function(){
        var commentNodes = this.props.data.map(function(comment){
            return (
                <Comment author={comment.author} key={comment.id} email={comment.email} gender={comment.gender}>
                    {comment.message}
                </Comment>
            )
        })
        return(
            <div className="comment-list">
                {commentNodes.length < 1 && "No comments yet"}
                {commentNodes.length >= 1 && commentNodes}
            </div>
        )
    }
})

var CommentForm = React.createClass({
    getInitialState: function(){
        return {author: '', message: '', email: '', gender: 'male'}
    },
    handleAuthorChange: function(e){
        this.setState({author: e.target.value})
    },
    handleEmailChange: function(e){
        this.setState({email: e.target.value})
    },
    handleGenderChange: function(gender){
        this.setState({gender: gender})
    },
    handleMessageChange: function(e){
        this.setState({message: e.target.value})
    },
    handleSubmit: function(e){
        e.preventDefault();
        var author = this.state.author.trim()
        var message = this.state.message.trim()
        var gender = this.state.gender
        var email = this.state.email.trim()
        if (!message || !author || !email){
            return;
        }
        this.props.onCommentSubmit({author: author, message: message, email: email, gender: gender})
        this.setState({author: '', message: '', email: '', gender: 'male'})
    },
    render: function(){
        var options = [
            {
                value: 'male',
                label: 'Male'
            },{
                value: 'female',
                label: 'Female'
            }
        ]
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="email" placeholder="Your email" value={this.state.email} onChange={this.handleEmailChange} />
                <Select name="gender" value={this.state.gender} options={options} onChange={this.handleGenderChange} clearable={false}/>
                <input type="text" placeholder="Your comment" value={this.state.message} onChange={this.handleMessageChange} />
                <input type="submit" value="Comment" />
            </form>
        )
    }
})

export default CommentBox
