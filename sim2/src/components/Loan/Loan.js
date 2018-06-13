import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Loan extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Loan
                <Link to="/image"><button>Previous Step</button></Link>
                <Link to="/rent"><button>Next Step</button></Link>
            </div>
        )
    }


}