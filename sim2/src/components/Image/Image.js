import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleImage } from "../../Ducks/reducer";
import { connect } from "react-redux";
import "./image.css";

class Image extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="image">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="center">
          <div className="inner_center">
            <div className="step">
              <p>Step 3</p>
            </div>

            <div className="progress">
              <div>*</div>
              <div>*</div>
              <div>*</div>
              <div>*</div>
              <div>*</div>
            </div>

            <div className="preview">
              <p>Preview</p>
            </div>

            <div className="inputs">
              Image URL
              <input className="image_input input_font" type="text" onChange={e => {this.props.handleImage(e.target.value)}} />
            </div>

            <div className="bottom_buttons">
              <Link to="/address">
                <button className="previous_step">Previous Step</button>
              </Link>
              <Link to="/loan">
                <button className="next_step">Next Step</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleImage
};

export default connect(
  null,
  mapDispatchToProps
)(Image);
