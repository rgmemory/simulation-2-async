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
              {current.image}
            </div>

            <div className="dashboard_properties_center">
              Name {current.name}
              <div className="dashboard_description">
                {current.description}
              </div>

            </div>

            <div className="dashboard_properties_right">

                  <div className="dashboard_loan">
                    Loan: {current.loan}
                    <button onClick={() => {this.delete(current.property_id)}}>X</button>
                  </div>

                  <div className="dashboard_mortgage">
                    Monthly Mortgage: {current.mortgage}
                  </div>
                  
                  <div className="dashboard_recommended_rent">

                    Recommended Rent: 
                  </div>

                  <div className="dashboard_desired_rent">
                    Desired Rent:
                  </div>


                  <div className="dashboard_address">
                    Address: {current.address}
                  </div>

                  <div className="dashboard_city">
                    City: {current.city}
                  </div>

                  
                
                  ID: {current.user_id}
                  PROPID: {current.property_id}
            </div>

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
          <button className="filter_button">Filter</button>
          <button className="reset_button">Reset</button>
        </div>

        <div className="listings">
          <div><b>Home Listings</b></div>

          <div> {formattedProperties}</div>
        </div>
      </div>
    );
  }
}
