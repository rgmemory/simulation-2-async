import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAddress, handleCity, handleState, handleZip} from '../../Ducks/reducer'


class Address extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                Address
                <input type="text" onChange={this.props.handleAddress}/>
                City
                <input type="text" onChange={this.props.handleCity}/>
                State
                <input type="text" onChange={this.props.handleState}/>
                Zip
                <input type="text" onChange={this.props.handleZip}/>

                <Link to="/name"><button>Previous Step</button></Link>
                <Link to="/image"><button>Next Step</button></Link>

                {/* {this.props.description} */}

            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         name: state.name,
//         description: state.description
//     }
// }

const mapDispatchToProps = {
    handleAddress, 
    handleCity, 
    handleState, 
    handleZip
}

export default connect(null, mapDispatchToProps)(Address)