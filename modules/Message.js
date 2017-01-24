import React from 'react'
import './Message.scss'
import CommentBox from './Comments'

var Message = React.createClass({
	getInitialState: function(){
		return {mehs: 0}
	},
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
								<h2>-{this.state.mehs}</h2>
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
						<CommentBox />
					</div>
				</div>
			</div>
		)
	}
})

export default Message;
