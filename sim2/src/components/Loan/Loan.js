import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {handleLoan, handleMortgage} from '../../Ducks/reducer'
import {connect} from 'react-redux';
import Header from '../Header/Header'
import './loan.css'

class Loan extends Component{
    constructor(){
        super()
    }



    render(){
        return(
            <div>
                <Header />
                Loan Amount
                <input type="text" onChange={this.props.handleLoan}/>
                Monthly Mortgage
                <input type="text" onChange={this.props.handleMortgage}/>


                <Link to="/image"><button>Previous Step</button></Link>
                <Link to="/rent"><button>Next Step</button></Link>
            </div>
        )
    }


}

const mapDispatchToProps = {
    handleLoan,
    handleMortgage
}

export default connect (null, mapDispatchToProps)(Loan)