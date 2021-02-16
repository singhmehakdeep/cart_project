import React , { useState } from "react"
import Products from "./components/Products"
import data from "./data.json"
function App() {
const [state,setState] = useState({
  products:data.products,
  size:"",
  sort:"",
})

  return (
    <div className="grid-container">
      <header className="">
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
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
