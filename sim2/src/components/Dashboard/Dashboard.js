import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header'
import './dashboard.css'


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            properties: []
        }
    }

    componentDidMount(){
        console.log('mounted');
        axios.get('/api/getproperties').then(res => {
            console.log('res', res.data);
            this.setState({
                properties: res.data
            })
        }).catch(e => {
            console.log(e)
        })
    }

    render(){

        var formattedProperties = this.state.properties.map((current, index) => {
            console.log(current);
            return(
                <div key = {current + index}>
                    ID: {current.user_id}
                    NAME: {current.name}
                    ADDRESS: {current.address}
                </div>
            )
        })

        console.log('formattedProperties', formattedProperties)

        return(

            
            
            <div className="dashboard">
                <Header />
                <div className="middle">
                <Link to="/name"> <button>Add new property</button> </Link>
                
                Home Listings

                {/* {
                    (formattedProperties) ? 

                    <div> you've got properties </div>
                    
                    :
                    
                    <div> No properties, yet. </div>
                } */}

                {formattedProperties}

                {/* <Link to="/name"><button>Enter a new property</button></Link> */}
                </div>
            </div>
        )
    }


}