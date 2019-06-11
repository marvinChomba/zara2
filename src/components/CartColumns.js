import React, { Component } from 'react'

export default class CartColumns extends Component {
  render() {
    return (
      <div className="d-none d-md-block container border-bottom border-primary">
        <div className="row d-flex justify-content-center">
          <div className="col-2 p-2 text-uppercase">Photo</div>
          <div className="col-2 p-2 text-uppercase">Image</div>
          <div className="col-2 p-2 text-uppercase">Price</div>
          <div className="col-2 p-2 text-uppercase">Quantity</div>
          <div className="col-2 p-2 text-uppercase">Category</div>
          <div className="col-2 p-2 text-uppercase">Actions</div>

        </div>
      </div>
    )
  }
}
