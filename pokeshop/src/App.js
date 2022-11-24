import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItems from "./components/ShoppingItems";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart([item, ...cart]);
  }

  return (
    <div className="grid-container">
      <Header />
      <Cart cart={cart} />
      <ShoppingItems onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
