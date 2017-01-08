import React, { Component } from 'react';
import coffee from './message/coffee.jpg';
import './Message.css';

class Message extends Component {
	constructor(){
		super();
		this.state = {
			mehs: 0
		};
	}
	render(){
		return(
			<div className="Message">
				<div className="message-container">
					<div className="meta">
						<span className="author">{this.props.author}</span>
						<img src={coffee} />
					</div>
					<div className="message">
						<h2>{this.props.title}</h2>
						<p>{this.props.message}</p>
					</div>
				</div>
				<div className="mehs">
					Mehs: {this.state.mehs}
					<button onClick={() => this.setState({mehs: this.state.mehs + 1})}>Meh</button>
				</div>
			</div>
		)
	};
}

export default Message;