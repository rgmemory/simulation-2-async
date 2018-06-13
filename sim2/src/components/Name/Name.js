import React, {Component} from 'react'
import {Link} from 'react-router-dom';


export default class Name extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Name

                <Link to="/address"><button>Next Step</button></Link>
            </div>
        )
    }


}