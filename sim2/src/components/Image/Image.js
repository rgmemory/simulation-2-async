import React, {Component} from 'react'
import {Link} from 'react-router-dom';


export default class Image extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Image
                <Link to="/address"><button>Previous Step</button></Link>
                <Link to="/loan"><button>Next Step</button></Link>
            </div>
        )
    }


}