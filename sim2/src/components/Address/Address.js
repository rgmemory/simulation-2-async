import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  handleAddress,
  handleCity,
  handleState,
  handleZip
} from "../../Ducks/reducer";
import "./address.css";

class Address extends Component {
  constructor() {
    super();
  }

  render() {

    console.log(this.props.name, this.props.description)
    return (
      <div className="address">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="center">
          <div className="step">
            <p>Step 2</p>
          </div>

          <div className="progress">
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>

          <div className="inputs">
            Address
            <input type="text" onChange={e => {this.props.handleAddress(e.target.value)}} />
            City
            <input type="text" onChange={e => {this.props.handleCity(e.target.value)}} />

            State
            <input type="text" onChange={e => {this.props.handleState(e.target.value)}} />

            Zip
            <input type="text" onChange={e => {this.props.handleZip(e.target.value)}} />

          </div>

          <div className="bottom_buttons">
            <Link to="/name">
              <button className="previous_step">Previous Step</button>
            </Link>
            <Link to="/image">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleAddress,
  handleCity,
  handleState,
  handleZip
};

export default connect(
  null,
  mapDispatchToProps
)(Address);
