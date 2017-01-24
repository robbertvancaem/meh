import React from 'react'
import _ from 'lodash'

// Styling
import './Feed.scss'
import './MehForm.scss'

// Other modules
import Message from './Message'
import messages from './../messages.json'

// Media
import car from './media/message/car.jpg'
import coffee from './media/message/coffee.jpg'
import haircut from './media/message/haircut.jpg'
import london from './media/message/london.jpg'
import mirror from './media/message/mirror.jpg'
import socks from './media/message/socks.jpeg'
import travel from './media/message/travel.jpg'
import background from './media/background.jpg'

var Feed = React.createClass({
	getInitialState: function(){
		return {messages: messages}
	},
	getRandomImage: function(){
		// Todo: make it actually random
		return car
	},
	handleSubmit(event){
		event.preventDefault();

		// Compose new message
		var obj = {
			"key": self.state.messages.length,
			"author": event.target.elements[0].value,
			"title": event.target.elements[1].value,
			"message": event.target.elements[2].value,
			"image": coffee,
			"mehs": 20
		}

		this.setState({ messages: this.state.messages.concat([obj])})

	},
	render(){
		var divStyle = {
            backgroundImage: 'url(' + background + ')'
        }

		return(
			<div className="Feed">
				<div className="MehForm" style={divStyle}>
					{/*
					<h2>What do you want to share with your friends?</h2>
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Your name" title="Please fill in your name" required/>
						<input type="text" placeholder="Your title" title="Please fill in the title for your 'meh'" required/>
						<input type="text" placeholder="Your meh message" title="Please fill in the actual meh" />
						<button type="submit">Share</button>
					</form>
					*/}
					<h2>Have a look at today's meh statuses</h2>
					<h3>What do you think?</h3>
				</div>
				<div className="feed-wrapper">
	        		{this.state.messages.map(message => <Message key={message.key} author={message.author} title={message.title} image={this.getRandomImage()} message={message.message} mehs={message.mehs}/>)}
				</div>
			</div>
		)
	}
})

export default Feed
