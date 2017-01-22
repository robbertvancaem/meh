import React, { Component } from 'react'
import './Feed.scss'
import './MehForm.scss'
import Message from './Message'
import _ from 'lodash'

import car from './media/message/car.jpg'
import coffee from './media/message/coffee.jpg'
import haircut from './media/message/haircut.jpg'
import london from './media/message/london.jpg'
import mirror from './media/message/mirror.jpg'
import socks from './media/message/socks.jpeg'
import travel from './media/message/travel.jpg'
import background from './media/background.jpg'

class Feed extends Component {
	constructor(){

		super();
		var self = this;

		this.state = {
			messages: [
				{
					"key": 0,
					"author":"Douch Ebag",
					"title" : "My new ride",
					"image" : car,
					"message" : "Yo, check out my new fresh #ride #burstinflames #10000milesperhourinasecond",
					"mehs": 10
				},{
					"key": 1,
					"author":"CoffeeFanatic32",
					"title" : "Starbucks",
					"image" : coffee,
					"message" : "I went to Starbucks, got a #latte #machiato and it was A. Ma. Zing.",
					"mehs": 20
				},{
					"key": 2,
	        		"author":"Raphael8310",
	        		"title" : "New Me",
	        		"image" : haircut,
	        		"message" : "Just got my hair did done #fresh #haircut",
					"mehs": 30
	        	},{
	        		"key": 3,
	        		"author":"Chino77",
	        		"title" : "London <3",
	        		"image" : london,
	        		"message" : "I'm standing here on this bridge with my glasses and this was picture #2000 cuz there were tourists on the other ones #fml",
					"mehs": 40
	        	},{
	        		"key": 4,
	        		"author":"Kayleigh1994",
	        		"title" : "#peace",
	        		"image" : mirror,
	        		"message" : "Make love, not war. And I love Justin Bieber",
					"mehs": 50
	        	},{
	        		"key": 5,
	        		"author":"TattooGal" ,
	        		"title" : "YOLOSWAG",
	        		"image" : socks,
	        		"message" : "Love my new socks. It's -10 degrees outside. #YOLO",
					"mehs": 60
	        	},{
	        		"key": 6,
	        		"author":"Fashionista879",
	        		"title" : "Look mom",
	        		"image" : travel,
	        		"message" : "I'm doing the No Pants Dance! Yay!",
					"mehs": 70
	        	}
			]
		}
	}
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

		// Copy state messages to new array
		var messages = self.state.messages.slice()

		// Add new message to array
		messages.push(obj)

		// Push to initial state
		self.setState({messages: messages})

	}
	render(){
		const divStyle = {
            backgroundImage: 'url(' + background + ')'
        }
		return(
			<div className="Feed">
				<div className="MehForm" style={divStyle}>
					<h2>What do you want to share with your friends?</h2>
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Your name" title="Please fill in your name" required/>
						<input type="text" placeholder="Your title" title="Please fill in the title for your 'meh'" required/>
						<input type="text" placeholder="Your meh message" title="Please fill in the actual meh" />
						<button type="submit">Share</button>
					</form>
				</div>
				<div className="feed-wrapper">
	        		{
	        			this.state.messages.map(function(message){
	        				return <Message key={message.key} author={message.author} title={message.title} image={message.image} message={message.message}  mehs={message.mehs}/>
	        			})
	        		}
				</div>
			</div>
		)
	}

}

export default Feed;
