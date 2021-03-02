import React, { useState, } from "react"
import { Provider } from "react-redux";
import { Cart } from "./components/Cart";
import { Filter } from "./components/Filter";
import Products from "./components/Products"
import data from "./data.json"
import { useStateCallback } from "./Hooks/useStateCallback"

import store from './store';

function App() {

  const [state, setState] = useStateCallback({
    products: data.products,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    size: "",
    sort: "",
  })
  // console.log(state);
  const addToCart = (product) => {
    const cartItems = state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        // item.count ? item.count ++ : item.count = 1;
        item.count++;
        alreadyInCart = true;
      }
    })
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    setState({ ...state, cartItems: cartItems })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));



  }

  const filterProducts = (event) => {
    // console.log(event.target.value)
    if (event.target.value === "")
      setState({
        ...state,
        size: event.target.value,
        products: data.products
      })
    else
      setState({
        ...state,
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      })

  }
  const sortProducts = (event) => {
    const sort = event.target.value;
    setState({
      ...state,
      sort: sort,
      products: state.products.slice().sort((a, b) => (
        sort === "lowest"
          ?
          ((a.price < b.price) ?
            -1 : 1)
          :
          sort === "highest"
            ?
            ((a.price > b.price)
              ? -1 : 1) :
            ((a._id < b._id)
              ?
              -1 : 1)


      ))
    })
  }

  const removeFromCart = (product) => {

    setState({
      ...state,
      cartItems: state.cartItems.filter(x => (x._id !== product._id))
    }, (state) => { localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); });
    // localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

  }

  const createOrder = (order) => {
    alert("Need to save order " + order.name)
  }
  return (
    <Provider store={store}>
      <div className="grid-container">
        <header className="">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={state.products.length}
                size={state.size}
                sort={state.sort}
                filterProducts={filterProducts}
                sortProducts={(e) => sortProducts(e)}

              >

              </Filter>
              <Products
                addToCart={(product) => { addToCart(product) }}
                products={state.products}></Products>
            </div>
            <div className="sidebar">
              <Cart
                cartItems={state.cartItems}
                createOrder={createOrder}
                removeFromCart={(i) => removeFromCart(i)}
              >
              </Cart>
            </div>

          </div>
        </main>
        <footer>
          All right is reserved
      </footer>
      </div>
    </Provider>
  );
}

export default App;
