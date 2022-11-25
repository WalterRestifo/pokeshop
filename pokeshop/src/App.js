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

  function handleRemoveFromCart(id) {
    //setCart(cart.filter((cartItem) => cartItem.id !== id));
    const cloneOfCart = cart.map((justWantToCloneCart) => justWantToCloneCart);
    const indexToRemove = cloneOfCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    cloneOfCart.splice(indexToRemove, 1);
    setCart(cloneOfCart);
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
