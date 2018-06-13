import React, {Component} from 'react'
import './header.css'
import {Link} from 'react-router-dom'


export default class Header extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="header">
                Houser

                <Link to="/dashboard"><button>Home</button></Link>
                <Link to="/"><button>Login</button></Link>

            </div>
        )
    }


}