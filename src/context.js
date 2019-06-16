import React , { Component } from "react";
import data from "./data"

const ZaraContext = React.createContext();


class ZaraProvider extends Component {
  state = {
    clothes: [...data],
    cart:[],
    cartTotal:0,
  }

  getTotals = () => {
    const tempCart = [...this.state.cart];
    const subT = tempCart.reduce((acc,item) => acc+=item.total,0);
    this.setState(() => {
      return {
        cartTotal:subT
      }
    })
  }

  increment = (id) => {
    const tempCart = [...this.state.cart];
    const prod = tempCart.filter(item => item.id === id)[0];
    prod.count += 1;
    prod.total = prod.count * prod.price;
    this.setState(() => {
      return {
        cart:[...tempCart]
      }
    },() => {
      this.getTotals()
    }) 
  }

  decrement = (id) => {
    console.log("In decrement")
    const tempCart = [...this.state.cart];
    const prod = tempCart.filter(item => item.id === id)[0];
    prod.count -= 1;
    if(prod.count === 0) {
      this.removeItem(id)
    } else {
      prod.total = prod.count * prod.price;
      this.setState({
        cart:[...tempCart]
      },() => {
        this.getTotals();
      })

    }
  }

  getItem = id => {
    const clothes = [...this.state.clothes];
    return clothes.filter(cloth => cloth.id === id)[0];
  }

  addToCart = id => {
    const tempProducts = [...this.state.clothes];
    const product = this.getItem(id);
    const index = tempProducts.indexOf(product);
    const tempProduct = tempProducts[index];
    tempProduct.inCart = true;
    tempProduct.count += 1;
    tempProduct.total = tempProduct.count * tempProduct.price;
    this.setState(() => {
      return {
      clothes:tempProducts,
      cart:[...this.state.cart,tempProduct]
      }
    },() => {
      console.log("Hey")
      this.getTotals();
    })
  }

  removeItem = (id) => {
    const cart = [...this.state.cart];
    const prods = [...this.state.clothes];
    const product = prods.filter(prod => prod.id === id)[0]
    const index = prods.indexOf(product);
    const tempProduct = prods[index];
    tempProduct.inCart = false
    const filtered = cart.filter(item => item.id !== id);
    this.setState(() => {
      return {
        cart:filtered,
        clothes:[...prods]
      }
    },() => {
      this.getTotals();
    })
  }

  render() {
    return (
      <ZaraContext.Provider value={{
        ...this.state,
        post:this.post,
        addToCart:this.addToCart,
        increment:this.increment,
        decrement:this.decrement,
        remove:this.removeItem,
        post2:this.post2,
        selectedProd:this.state.selectedProduct,
        select:this.selectItem
      }}>
        {this.props.children}
      </ZaraContext.Provider>
    )
  }
}

const ZaraConsumer = ZaraContext.Consumer;

export {ZaraConsumer,ZaraProvider}
