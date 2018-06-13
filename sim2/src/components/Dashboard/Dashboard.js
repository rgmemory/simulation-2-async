import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


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
        })
    }



    render(){

        var formattedProperties = this.state.properties.map((current, index) => {
            return(
                <div key = {current + index}>
                    {current.name}
                </div>
            )
        })

        return(


            <div>
                Dashboard

                {/* <Link to="/"> <button>Add new property</button> </Link> */}

                {formattedProperties}


                <Link to="/name"><button>Enter a new property</button></Link>
            </div>
        )
    }


}