import React from 'react';
import Product from "./Product"
import {ZaraConsumer} from "../context";

class Products extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center text-uppercase text-primary mt-3 mb-5 welcome"><span className="border-bottom border-primary brand">Welcome to Zara</span></h1>
        <ZaraConsumer>
          {value => {
            const clothes = value.clothes;

            return (
              <React.Fragment>
                {/* <button onClick={() => value.post2()}>Woah</button>
                <button style={{
              "marginTop":"200px"
            }}onClick={() => value.post()}> p</button>  */}
                <div className="container m-3 mx-auto main">
                  <div className="container">
                    <div className="row mx-auto text-center d-flex justify-content-center">
                      {clothes.map(cloth => {
                        return (
                          <Product cloth={cloth} key={cloth.name} addToCart={value.addToCart} select={value.select}/>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </React.Fragment>)
          }}
        </ZaraConsumer>
      </React.Fragment>
    );
  }
}

export default Products;
