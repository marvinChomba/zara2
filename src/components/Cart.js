import React from 'react';
import {ZaraConsumer} from "../context";
import CartItem from "./CartItem"
import PaypalButton from "./PayButton"
import CartColumns from "./CartColumns";

export default function Cart() {
  return (
    <React.Fragment>
      <ZaraConsumer>
        {value => {
          const {cart} = value;
          if(cart.length === 0) {
            return (
              <div className="text-center">
                <h3 className="text center text-primary mt-3 mx-auto">Your cart is empty</h3>
              </div>
            )
          } else {
            return (
              <div className="text-center">
                  <h3 className="text center text-primary mt-3 mx-auto">Your cart</h3>
                  <CartColumns />
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      {cart.map(item => {
                        return (
                          <CartItem key={item.id} item={item} increment={value.increment} decrement={value.decrement} remove={value.remove}/>
                        )
                      })}
                    </div>
                    <div className="mt-3 text-left">
                    <p className="text-primary lead"><strong>Total</strong>: KES <strong>{value.cartTotal}</strong></p>
                    </div>
                    <PaypalButton total={value.cartTotal}/>
                  </div>
              </div>
            )
          }
        }}
      </ZaraConsumer>
    </React.Fragment>
  )
}
