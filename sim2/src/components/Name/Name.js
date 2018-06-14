import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleName, handleDescription} from '../../Ducks/reducer'
import Header from '../Header/Header'
import './name.css'

export class Name extends Component{
    constructor(){
        super()
    }

    render(){

        return(
            <div>
                <Header />
                Property Name
                <input type="text" onChange={e => this.props.handleName(e.target.value)}/>

                Property Description
                <input type="text" onChange={e => this.props.handleDescription(e.target.value)}/>

                <Link to="/address"><button>Next Step</button></Link>
            </div>
        )
    }


}

// function mapStateToProps(state){
//     return{
//         username: state.username,
//         address: state.address
//     }
// }

const mapDispatchToProps = {
    handleName,
    handleDescription
}

export default connect(null, mapDispatchToProps)(Name)