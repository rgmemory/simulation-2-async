import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {handleImage} from '../../Ducks/reducer'
import {connect} from 'react-redux';


class Image extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                Image
                <input type="text" onChange={this.props.handleImage}/>
                <Link to="/address"><button>Previous Step</button></Link>
                <Link to="/loan"><button>Next Step</button></Link>
            </div>
        )
    }


}

const mapDispatchToProps = {
    handleImage
}

export default connect(null, mapDispatchToProps)(Image)