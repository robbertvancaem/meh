import React, { Component } from 'react'
import './Message.scss'
import CommentBox from './Comments'

class Message extends Component{
	render(){
		return(
			<div className="Message">
				<div className="message-container">
					<div className="meta">
						<span className="author">{this.props.author}</span>
						<img src={this.props.image} alt="meh" />
					</div>
					<div className="message">
						<div className="message-header">
							<h2>{this.props.title}</h2>
							<div className="mehs-container">
								<h2>-{this.props.mehs}</h2>
								<div className="mehs">
									<button onClick={() => this.setState({mehs: this.state.mehs + 1})}>
										Meh
									</button>
									<button onClick={() => this.setState({mehs: this.state.mehs + 10})}>
										Super-Meh
									</button>
								</div>
							</div>
						</div>
						<p>{this.props.message}</p>
						<CommentBox url="http://localhost:3000/api/comments" pollInterval={20000}/>
					</div>
				</div>
			</div>
		)
	};
}

export default Message;
