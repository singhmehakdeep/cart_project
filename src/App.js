import React , { useState } from "react"
import { Filter } from "./components/Filter";
import Products from "./components/Products"
import data from "./data.json"
function App() {
const [state,setState] = useState({
  products:data.products,
  size:"",
  sort:"",
})

const filterProducts = (event) => {
  // console.log(event.target.value)
  if(event.target.value === "")
    setState({
      size: event.target.value,
      products:data.products
    })
  else
    setState({
      size:event.target.value,
      products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
    })

}
const sortProducts= (event) => {
const sort = event.target.value;
setState({
  sort:sort,
  products:state.products.slice().sort((a,b) => (
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
  return (
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
            <Products products={state.products}></Products>
          </div>
          <div className="sidebar">
            cart items
          </div>

        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
