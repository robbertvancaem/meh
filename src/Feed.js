import React, { Component } from 'react';
import './Feed.css';
import Message from './Message';
import MehForm from './MehForm';

import car from './message/car.jpg';
import coffee from './message/coffee.jpg';
import haircut from './message/haircut.jpg';
import london from './message/london.jpg';
import mirror from './message/mirror.jpg';
import socks from './message/socks.jpeg';
import travel from './message/travel.jpg';

class Feed extends Component {
	constructor(){
		super();
		this.state = {
			messages: [
				{
					"key": 0,
					"author":"Douch Ebag",
					"title" : "My new ride",
					"image" : car,
					"message" : "Yo, check out my new fresh #ride #burstinflames #10000milesperhourinasecond"
				},{
					"key": 1,
					"author":"CoffeeFanatic32",
					"title" : "Starbucks",
					"image" : coffee,
					"message" : "I went to Starbucks, got a #latte #machiato and it was A. Ma. Zing."
				},{
					"key": 2,
	        		"author":"Raphael8310",
	        		"title" : "New Me",
	        		"image" : haircut,
	        		"message" : "Just got my hair did done #fresh #haircut"
	        	},{
	        		"key": 3,
	        		"author":"Chino77",
	        		"title" : "London <3",
	        		"image" : london,
	        		"message" : "I'm standing here on this bridge with my glasses and this was picture #2000 cuz there were tourists on the other ones #fml"
	        	},{
	        		"key": 4,
	        		"author":"Kayleigh1994",
	        		"title" : "#peace",
	        		"image" : mirror,
	        		"message" : "Make love, not war. And I love Justin Bieber"
	        	},{
	        		"key": 5,
	        		"author":"TattooGal" ,
	        		"title" : "YOLOSWAG",
	        		"image" : socks,
	        		"message" : "Love my new socks. It's -10 degrees outside. #YOLO"
	        	},{
	        		"key": 6,
	        		"author":"Fashionista879",
	        		"title" : "Look mom",
	        		"image" : travel,
	        		"message" : "I'm doing the No Pants Dance! Yay!"
	        	}
			]
		}
	}
	render(){
		return(
			<div className="Feed">
				<MehForm />
        		{
        			this.state.messages.map(function(message){
        				return <Message key={message.key} author={message.author} title={message.title} image={message.image} message={message.message}  />
        			}) 
        		}
			</div>
		)
	}
  	
}

export function addMeh(data){
	console.log(data);
}

export default Feed;