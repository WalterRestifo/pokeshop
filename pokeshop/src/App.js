import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItems from "./components/ShoppingItems";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    setCart([item, ...cart]);
  }

  function handleRemoveFromCart(item) {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  }

  return (
    <div className="grid-container">
      <Header />
      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      <ShoppingItems
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
