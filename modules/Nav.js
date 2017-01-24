import React from 'react'
import { Link } from 'react-router'
import './Nav.scss'

var Nav = React.createClass({
    render(){
        return(
            <ul role="nav">
                <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Feed</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
        )
    }
})

export default Nav
