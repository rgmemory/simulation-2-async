import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      properties: []
    };

    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getproperties")
      .then(res => {
        this.setState({
          properties: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  delete(value){
    // console.log('delete', value)
    axios.delete('/api/delete/' + value).then(res => {
      // console.log('front end delete works')
      this.props.history.push('/dashboard')
    })
  }

  render() {
    var formattedProperties = this.state.properties.map((current, index) => {
      return (
        <div className="dashboard_properties" key={current + index}>

            <div className="dashboard_properties_left">
              IMG: {current.image}
            </div>

            <div className="dashboard_properties_center">
              NAME: {current.name}
              <div className=""></div>

            </div>

            <div className="dashboard_properties_right">

                  <div className="dashboard_loan">
                    Loan: {current.loan}
                  </div>

                  <div className="dashboard_mortgage">
                    Monthly Mortgage: {current.mortgage}
                  </div>

                  <div className="dashboard_desired_rent">
                    Desired Rent:
                  </div>

                  <div className="dashboard_recommended_rent">

                    Recommended Rent: 
                  </div>

                  <div className="dashboard_address">
                    Address: {current.address}
                  </div>

                  <div className="dashboard_city">
                    City: {current.city}
                  </div>

                  <button onClick={() => {this.delete(current.property_id)}}>XXX</button>
                
            </div>
          ID: {current.user_id}
          PROPID: {current.property_id}
          ADDRESS: {current.address}

        </div>
      );
    });

    return (
      <div className="dashboard">
        <div className="new_property">
          <Link to="/name">
            {/* {" "} */}
            <button className="dashboard_add_new">Add new property</button>{" "}
          </Link>
        </div>

        <div className="dashboard_filter">
          <p>List properties with 'desired rent' greater than: $</p>
          <input className="dashboard_input" />
          <button className="dashboard_filter">Filter</button>
          <button className="dashboard_reset">Reset</button>
        </div>

        <div className="listings">
          <p>Home Listings</p>

          <div> {formattedProperties}</div>
        </div>
      </div>
    );
  }
}
