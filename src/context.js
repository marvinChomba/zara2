import React , { Component } from "react";
import axios from "axios"

const ZaraContext = React.createContext();

const data = [
  {
    "id":1,
    "name": "Boogie wit a Hoddie",
    "price": 120,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "img/hoodie.jpeg",
    "selected":false
  },
  {
    "id":2,
    "name": "Bomber Fomber",
    "price": 150,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "img/bomber.jpeg",
    "selected": false

  },
  {
    "id":3,
    "name": "Sundress",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "img/dress.jpeg",
    "selected": false
  },
  {
    "id":4,
    "name": "Denim Jacket",
    "price": 130,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "img/jacket.jpeg",
    "selected": false

  },
  {
    "id":5,
    "name": "Sun Glasses",
    "price": 50,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "img/glasses.jpeg",
    "selected": false

  },
  {
    "id":6,
    "name": "Trouser",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "winter",
    "img": "img/trousers.jpeg",
    "selected": false

  },
  {
    "id":7,
    "name": "T-Shirt",
    "price": 80,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": "summer",
    "img": "img/t-shirt.jpeg",
    "selected": false

  },
  {
    "id":8,
    "name": "Watch",
    "price": 280,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": null,
    "img": "img/watch.jpeg",
    "selected": false
  },
  {
    "id": 9,
    "name": "Trench Coat",
    "price": 200,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/trenchcoat.jpeg",
    "selected": false
  },
  {
    "id": 10,
    "name": "All Black",
    "price": 190,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/allblack.jpeg",
    "selected": false
  },
  {
    "id": 11,
    "name": "2 Stripes",
    "price": 210,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/2stripes.jpeg",
    "selected": false
  },
  {
    "id": 12,
    "name": "Long Dress",
    "price": 160,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/dress2.jpeg",
    "selected": false
  },
  {
    "id": 13,
    "name": "Retro",
    "price": 154,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/retro.jpeg",
    "selected": false
  },
  {
    "id": 14,
    "name": "Suit",
    "price": 260,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/suit.jpeg",
    "selected": false
  },
  {
    "id": 15,
    "name": "Jeans",
    "price": 100,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/jeans.jpeg",
    "selected": false
  },
  {
    "id": 16,
    "name": "Sweat Shirt",
    "price": 70,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Et voluptatem eligendi laboriosam similique esse deleniti facere! Incidunt hic ab maxime.",
    "inCart": false,
    "count": 0,
    "total": 0,
    "category": 'winter',
    "img": "img/sweatshirt.jpeg",
    "selected": false
  },


]

class ZaraProvider extends Component {
  state = {
    clothes: [],
    cart:[],
    cartTotal:0,
    selectedProduct:{},
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
      localStorage.setItem('cart',JSON.stringify(this.state.cart))
    }) 
  }

  decrement = (id) => {
    console.log("In decrement")
    const tempCart = [...this.state.cart];
    const prod = tempCart.filter(item => item.id === id)[0];
    prod.count -= 1;
    if(prod.count === 0) {
      this.removeItem(id)
      localStorage.setItem('cart',JSON.stringify(this.state.cart));
    } else {
      prod.total = prod.count * prod.price;
      this.setState({
        cart:[...tempCart]
      },() => {
        this.getTotals();
        localStorage.setItem('cart', JSON.stringify(this.state.cart));

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
    this.setState((prevState,props) => {
      return {
      clothes:tempProducts,
      cart:[...prevState.cart,tempProduct]
      }
    },() => {
      console.log("Hey")
      this.getTotals();
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
      localStorage.setItem('clothes', JSON.stringify(this.state.clothes));

    })
  }

  componentWillMount() {
    if(localStorage.getItem("cart")) {
      this.setState(() => {
        return {
          cart:JSON.parse(localStorage.getItem('cart'))
        }
      },() => {
        console.log(this.state.cart)
      })
    }
  }

  componentDidMount = () => {
    axios.get("https://zara-88f4a.firebaseio.com/clothes.json").then(res => {
      this.setState(() => {
        const clothes = res.data["-Lh3Dop4Ej8oPPFXhbad"];
        const selected = clothes.filter(cloth => cloth.selected)[0];
        return {
          clothes: clothes,
          selectedProduct:selected,
        }
      },() => {
        // want to get cart then update that info to the products in the state;
        // get the prod in the cart
        const tempCart = [...this.state.cart];
        const prods = [...this.state.clothes];
        for(let i = 0; i < tempCart.length; i++) {
          // loop through all the prods and update them
          for(let j = 0; j < prods.length; j++) {
            if(tempCart[i]['id'] === prods[j]['id']) {
              prods[j]['count'] = tempCart[i]['count'];
              prods[j]['inCart'] = true;
            }
          }
        }
        this.setState(() => {
          return {
          cart:[...tempCart],
          clothes:[...prods]
          }
        },() => {
          this.getTotals();
        })
      })
    })
  }
    
  post = () => {
    axios.post("https://zara-88f4a.firebaseio.com/clothes.json", data).then(res => {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  }

  post2 = () => {
    axios.put("https://zara-88f4a.firebaseio.com/clothes/-Lh3Dop4Ej8oPPFXhbad.json",this.state.clothes).then(res => {
      console.log(res)
    }, (err) => {
      console.log(err)
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
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
      localStorage.setItem('clothes',JSON.stringify(this.state.clothes));
    })
  }

  selectItem = (id) => {
    const prods = [...this.state.clothes];
    const prod = this.getItem(id);
    const index = prods.indexOf(prod)
    prods.forEach(prod => prod.selected = false);
    const selectedProd = prods[index];
    selectedProd.selected = true
    this.setState(() => {
      return {
        clothes:[...prods],
        selectedProduct:selectedProd
      }
    },() => {
      this.post2()
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