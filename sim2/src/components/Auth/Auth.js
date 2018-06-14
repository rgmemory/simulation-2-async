import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import './auth.css'


export default class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    updateUsername(value){
        console.log(value);

        this.setState({
            username: value
        })
    }

    updatePassword(value){
        console.log(value);

        this.setState({
            password: value
        })
    }

    submitLogin(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            console.log('front end', res)

            if(res.status == 200){
                console.log('it worked')
                this.props.history.push(`/dashboard`)
            }
        }).catch(e => {
            console.log('nice try')
        })
    }

    render(){
        return(
            <div className="auth">
                <div className="middle">
                    Auth
                    
                    Username
                    <input type="text" onChange={e => {this.updateUsername(e.target.value)}}/>
                    Password
                    <input type="text" onChange={e => {this.updatePassword(e.target.value)}}/>

                    <button onClick={this.submitLogin}>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }


}