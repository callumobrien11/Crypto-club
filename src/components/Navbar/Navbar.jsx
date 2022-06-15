import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

  handleLogout = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><Link to="/">Crypto Club</Link></h1>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-links">Hub</Link></li>
          <li><Link to="/news"  className="nav-links">News</Link></li>
          <li><Link to="/rates" className="nav-links">Exchange Rates</Link></li>
        </ul>
        <button className="btn-signup" onClick={this.handleLogout}>Log Out</button>
      </nav>
    );
  }
}

export default Navbar;
