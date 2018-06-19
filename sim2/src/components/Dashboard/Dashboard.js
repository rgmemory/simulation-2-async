import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      properties: [],
      filterInput: ''
    };

    this.delete = this.delete.bind(this);
    this.filterInput = this.filterInput.bind(this);
    this.submitFilter = this.submitFilter.bind(this);
    this.reset = this.reset.bind(this);
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
    axios.delete('/api/delete/' + value).then(res => {
      axios.get('api/getproperties').then(res => 
        this.setState({
          properties: res.data
        })
      )
      // this.props.history.push('/dashboard')//////why does this lag sometimes
    })
  }

  filterInput(value){
    // console.log(value)
    this.setState({
      filterInput: value
    })
  }

  submitFilter(){
    // console.log('filter clicked')
    axios.get(`/api/getproperties?filter=${this.state.filterInput}`).then(res =>
      // console.log('front end filte rwrorks'),
      this.setState({
        properties: res.data
      })
    )
  }

  reset(){

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

      this.setState({
        filterInput: 0
      })
    // console.log('reset clicked')
    // this.setState({
    //   filterInput: 0
    // })
    // axios.get(`/api/getproperties?filter=${this.state.filterInput}`).then(res =>
    //   // console.log('front end filte rwrorks'),
    //   this.setState({
    //     properties: res.data
    //   })
    // )
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

                    Recommended Rent: {current.mortgage * 1.25}
                  </div>

                  <div className="dashboard_desired_rent">
                    Desired Rent: {current.rent}
                  </div>


                  <div className="dashboard_address">
                    Address: {current.address}
                  </div>

                  <div className="dashboard_city">
                    City: {current.city}
                  </div>
            </div>

        </div>
      );
    });

    return (
      <div className="dashboard">
        <div className="new_property">
          <Link to="/name">
            <button className="dashboard_add_new">Add new property</button>{" "}
          </Link>
        </div>

        <div className="dashboard_filter">
          <p>List properties with 'desired rent' greater than: $</p>
          <input placeholder={this.state.filterInput} onChange={e => {this.filterInput(e.target.value)}}/>
          <button className="filter_button" onClick={this.submitFilter}>Filter</button>
          <button className="reset_button" onClick={this.reset}>Reset</button>
        </div>

        <div className="listings">
          <div><b>Home Listings</b></div>

          <div> {formattedProperties}</div>
        </div>
      </div>
    );
  }
}
