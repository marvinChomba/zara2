import React from 'react';
import {ZaraConsumer} from "../context";
import {Link} from "react-router-dom";
export default function Details() {
  return (
    <div className="text-center">
      <ZaraConsumer>
        {value => {
          const { selectedProd,addToCart } = value;
          return (
          <React.Fragment>
              <h3 className="text-uppercase text-primary my-4">{selectedProd.name}</h3>
              <div className="container mb-2">
                <div className="row d-flex justify-content-around">
                  <div className="col-10 px-auto col-md-5 px-5 ">
                    <img src={selectedProd.img} alt="" className="img-fluid" id="details-img"/>
                  </div>
                  <div className="col-10 px-auto col-md-5">
                    <h4>{selectedProd.name}</h4>
                    <p className="lead text-muted text-uppercase">Price: KES {selectedProd.price}</p>
                    <p className="lead text-left my-4">{selectedProd.description}</p>
                    <div className="buttons text-uppercase">
                      <div>
                        <Link to="/" className="p-1">Continue shopping</Link>
                      </div>
                      <div>
                        {selectedProd.inCart ? (<p disabled className="p-1 mt-2">In cart</p>) : (<p className="p-1 mt-2" onClick={() => addToCart(selectedProd.id)} style={{
                            'cursor':'pointer'
                          }}>Add to cart</p>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </React.Fragment>
          )
        }}
      </ZaraConsumer>
    </div>
  )
}
