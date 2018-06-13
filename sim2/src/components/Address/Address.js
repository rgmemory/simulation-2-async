import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Address extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Address

                Property Name
                <input />

                Property Description
                <input />

                <Link to="/name"><button>Previous Step</button></Link>
                <Link to="/image"><button>Next Step</button></Link>


            </div>
        )
    }


}