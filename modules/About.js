import React from 'react'
import './About.scss'

var About = React.createClass({
    render(){
        return (
            <div className="about-component">
                <h1>About meh</h1>
                Meh is an application aimed as a satirical view on what we call 'social media' today.
                The internet gets flooded with useless information and unrelevant posts. With meh, you can
                up or downvote any entry a friend of you posts. When a status receives too many mehs, that person
                will no longer show up on the feed of his/her friends. <br />
                <br />
                *Disclaimer: meh is still in beta, obviously
            </div>
        )
    }
})

export default About
