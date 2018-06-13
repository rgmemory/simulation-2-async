import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        {routes}
      </div>
    );
  }
}

export default App;





/////use sessions to login and know which user is doing what then place an axios call to make the update
//use redux to manage all the information along the way so you aren't needing to do axios calls all the time
//at the end push that information to the server and include the session information so it knows what to update