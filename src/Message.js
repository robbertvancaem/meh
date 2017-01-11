import React, { Component } from 'react';
import './Message.css';
import {getRandomInt} from './Utils';

class Message extends Component {
	constructor(){
		super();
		this.state = {
			mehs: getRandomInt(0, 1000)
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
						<h2>{this.props.title} (-{this.state.mehs})</h2>
						<p>{this.props.message}</p>
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
				
			</div>
		)
	};
}

export default Message;