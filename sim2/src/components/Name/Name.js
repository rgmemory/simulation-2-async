import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleName, handleDescription } from "../../Ducks/reducer";
import Header from "../Header/Header";
// import './name.css'

export class Name extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="name">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="center">
          <div className="step">
            <p>Step 1</p>
          </div>

          <div className="progress">
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>

          <div className="inputs">
            Property Name
            <input
              type="text"
              onChange={e => this.props.handleName(e.target.value)}
            />
            Property Description
            <input
              type="text"
              onChange={e => this.props.handleDescription(e.target.value)}
            />
          </div>

          <div className="bottom_buttons">
            <Link to="/address">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  handleName,
  handleDescription
};

export default connect(
  null,
  mapDispatchToProps
)(Name);
