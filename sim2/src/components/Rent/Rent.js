import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {handleRent} from '../../Ducks/reducer'


class Rent extends Component{
constructor(){
    super()
    }

    render(){
        return(
            <div>
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

