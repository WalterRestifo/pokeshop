import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingItems from "./components/ShoppingItems";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleAddToCart(item) {
    //variation 1 setCart([item, ...cart]);

    const cloneOfCart = cart.map((justWantToCloneCart) => justWantToCloneCart);
    const arrayOfSameID = cloneOfCart.filter(
      (cartItem) => cartItem.id === item.id
    );
    const internCount = arrayOfSameID.length + 1;
    setCart([{ count: internCount, ...item }, ...cart]);
    console.log(cart);

    setCounter(counter + 1);
  }

  function handleRemoveFromCart(id) {
    //setCart(cart.filter((cartItem) => cartItem.id !== id));
    const cloneOfCart = cart.map((justWantToCloneCart) => justWantToCloneCart);
    const indexToRemove = cloneOfCart.findIndex(
      (cartItem) => cartItem.id === id
    );
    cloneOfCart.splice(indexToRemove, 1);
    setCart(cloneOfCart);
    setCounter(counter - 1);
  }

  return (
    <div className="grid-container">
      <Header />
      <Cart
        cart={cart}
        counter={counter}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <ShoppingItems onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
