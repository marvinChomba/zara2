import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {ZaraConsumer} from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5">
        <Link className="navbar-brand" to="/">ZARA</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <ZaraConsumer>
                {value => {
                  const {cart} = value;
                  return <Link className="nav-link" to="/cart">Cart <span className="badge badge-light">{cart.length}</span></Link>
                }}
              </ZaraConsumer>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
