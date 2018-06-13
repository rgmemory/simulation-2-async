import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Rent extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Rent

                <Link to="/loan"><button>Previous Step</button></Link>
                <Link to="/dashboard"><button>Complete</button></Link>
            </div>
        )
    }


}