import React, { Component } from 'react';
import './Message.css';
import Comment from './Comment';

class Message extends Component {
	constructor(){
		super();
		this.state = {

		};
	}
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
							<h2 className="meh">-{this.props.mehs}</h2>
						</div>
						<p>{this.props.message}</p>
						<div className="mehs">
							<button onClick={() => this.setState({mehs: this.state.mehs + 1})}>
								Meh
							</button>
							<button onClick={() => this.setState({mehs: this.state.mehs + 10})}>
								Super-Meh
							</button>
						</div>
						<Comment />
					</div>
				</div>

			</div>
		)
	};
}

export default Message;
