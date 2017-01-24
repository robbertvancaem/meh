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
import background from './media/background.png'

// Store reference to the messages object
var messages_obj = Object.freeze(messages)

var Feed = React.createClass({
	getInitialState: function(){
		return {
			messages: messages,
			author: '',
			title: '',
			message: ''
		}
	},
	getImage: function(key){
		switch(key){
			case 0:
				return car
				break
			case 1:
				return coffee
				break
			case 2:
				return haircut
				break
			case 3:
				return london
				break
			case 4:
				return mirror
				break
			case 5:
				return socks
				break
			case 6:
				return travel
				break
			default:
				return car
				break
		}
	},
	handleAuthorChange: function(e){
		this.setState({author: e.target.value})
	},
	handleTitleChange: function(e){
		this.setState({title: e.target.value})
	},
	handleMessageChange: function(e){
		this.setState({message: e.target.value})
	},
	handleSubmit(event){
		event.preventDefault()

		// Compose new message
		var obj = [{
			"key": messages_obj.length,
			"author": event.target.elements[0].value,
			"title": event.target.elements[1].value,
			"message": event.target.elements[2].value,
			"image": coffee
		}]

		// Add new message to the beginning of the data
		messages_obj = obj.concat(messages_obj)

		this.setState({
			messages: messages_obj,
			author: '',
			title: '',
			message: ''
		})

	},
	render(){
		var divStyle = {
            backgroundImage: 'url(' + background + ')'
        }

		return(
			<div className="feed">
				<div className="meh-form">

					<h2>What do you want to share with your friends?</h2>
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} title="Please fill in your name" required/>
						<input type="text" placeholder="A nice title for your meh" value={this.state.title} onChange={this.handleTitleChange} title="Please fill in the title for your 'meh'" required/>
						<input type="text" placeholder="Your actual mehhhhhssage" value={this.state.message} onChange={this.handleMessageChange} title="Please fill in the actual meh" required/>
						<button type="submit">Share</button>
					</form>
				</div>
				<div className="feed-wrapper" style={divStyle}>
					<div className="feed-container">
	        			{this.state.messages.map(message => <Message key={message.key} author={message.author} title={message.title} image={this.getImage(message.key)} message={message.message} comments={message.comments}/>)}
					</div>
				</div>
			</div>
		)
	}
})

export default Feed
