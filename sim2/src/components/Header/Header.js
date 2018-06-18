import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <Link to="/dashboard">
            <button>Houser Dashboard</button>
          </Link>
          <Link to="/">
            <button>Login</button>
          </Link>
        </div>
      </div>
    );
  }
}
