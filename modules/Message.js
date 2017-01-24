import React from 'react'
import './Message.scss'
import CommentBox from './Comments'

var Message = React.createClass({
	getInitialState: function(){
		return {mehs: 0}
	},
	render(){
		return(
			<div className="message-component">
				<div className="message-container">
					<div className="message-meta">
						<span className="author">{this.props.author}</span>
						<img src={this.props.image} alt="meh" />
						<div className="mehs-container">
							<h2>{this.state.mehs}</h2>
							<div className="mehs">
								<button onClick={() => this.setState({mehs: this.state.mehs - 1})}>
									-1
								</button>
								<button onClick={() => this.setState({mehs: this.state.mehs + 1})}>
									+1
								</button>
							</div>
						</div>
					</div>
					<div className="message-wrapper">
						<div className="message">
							<h2>{this.props.title}</h2>
							<p>{this.props.message}</p>
						</div>
						<CommentBox data={this.props.comments}/>
					</div>
				</div>
			</div>
		)
	}
})

export default Message;
