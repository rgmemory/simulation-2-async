import React, { Component } from 'react';
import routes from './routes';
import Header from '../src/components/Header/Header'
import {withRouter} from 'react-router';
import './App.css'

class App extends Component {
  render() {

    return (
      <div>
          {
            this.props.location.pathname == '/' ?
            null
            :
            <Header />
          }          
            
          <div className="background">
            <div className={`${this.props.location.pathname === '/' ? 'auth_center' : 'center'}`}>
              {routes}
            </div>
          </div>

      </div>
    );
  }
}

export default withRouter(App)



{/* <div className={`${this.props.location.pathname === '/' ? 'auth' : 'middle'}`}> */}


/////use sessions to login and know which user is doing what then place an axios call to make the update
//use redux to manage all the information along the way so you aren't needing to do axios calls all the time
//at the end push that information to the server and include the session information so it knows what to update