import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {handleRent} from '../../Ducks/reducer'
import Header from '../Header/Header'
import './rent.css'


class Rent extends Component{
constructor(){
    super()
    }

    render(){

        console.log(this.props.name)
        return(
            <div>
                <Header />
                Desired Rent
                <input type="text" onChange={this.props.handleRent}/>

                <Link to="/loan"><button>Previous Step</button></Link>
                <Link to="/dashboard"><button>Complete</button></Link>
            </div>
        )
    }
}

const mapDispatchToProps = {
    handleRent
}

export default connect(null, mapDispatchToProps)(Rent)

