import React from 'react'
import './Comments.scss'
var Remarkable = require('remarkable')

var Comment = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable()
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="Comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
})

var CommentBox = React.createClass({
    loadCommentsFromServer: function(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            succes: function(data){
                this.setState({data: data})
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString())
            }.bind(this)
        })
    },
    handleCommentSubmit: function(comment){
        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment])
        this.setState({data: newComments})
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            succes: function(data){
                this.setState({data: data})
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({data: comments})
                console.error(this.props.url, status, err.toString())
            }.bind(this)
        })
    },
    getInitialState: function() {
        return {data: []}
    },
    componentDidMount: function(){
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval)
    },
    render: function(){
        return (
            <div className="commentBox">
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
                <Comment author={comment.author} key={comment.id}>
                    {comment.message}
                </Comment>
            )
        })
        return(
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
})

var CommentForm = React.createClass({
    getInitialState: function(){
        return {author: '', message: ''}
    },
    handleAuthorChange: function(e){
        this.setState({author: e.target.value})
    },
    handleMessageChange: function(e){
        this.setState({message: e.target.value})
    },
    handleSubmit: function(e){
        e.preventDefault();
        var author = this.state.author.trim();
        var message = this.state.message.trim();
        if (!message || !author){
            return;
        }
        this.props.onCommentSubmit({author: author, message: message})
        this.setState({author: '', message: ''})
    },
    render: function(){
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="Your comment" value={this.state.message} onChange={this.handleMessageChange} />
                <input type="submit" value="Comment" />
            </form>
        )
    }
})

export default CommentBox
