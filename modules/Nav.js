import React from 'react'
import { Link } from 'react-router'
import './Nav.scss'

export default React.createClass({
    render(){
        return(
            <ul role="nav">
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Dashboard</Link></li>
                <li><Link to="/feed" activeClassName="active">Feed</Link></li>
            </ul>
        )
    }
})