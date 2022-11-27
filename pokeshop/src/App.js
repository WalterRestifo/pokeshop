import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/item/");
        const data = await response.json();
        const allItemsInfos = await Promise.all(
          data.results.map((item) => fetchInfoAboutItem(item.url))
        );
        setItems(allItemsInfos);
      } catch (error) {
        console.alert("error by fetching");
      }
    }
    fetchItems();
    async function fetchInfoAboutItem(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return {
          image: data.sprites.default,
          cost: data.cost,
          name: data.name,
          url: url,
          id: data.id,
          counter: 0,
        };
      } catch (error) {
        console.error("error by fetching in Items.js", url);
      }
    }
  }, []);

  function handleAddToCart(item) {
    const cloneOfItems = items.map((shopItem) => {
      if (item.id === shopItem.id) {
        shopItem.counter++;
      }
      return shopItem;
    });
    setItems(cloneOfItems);
  }

  function handleRemoveFromCart(id) {
    const cloneOfItems = items.map((item) => {
      if (item.id === id) {
        item.counter--;
      }
      return item;
    });
    setItems(cloneOfItems);
  }

  function handleBuy() {
    const cloneOfItems = items.map((item) => {
      item.counter = 0;
      return item;
    });
    setItems(cloneOfItems);
  }
  return (
    <div className="grid-container">
      <Header />
      <Cart
        items={items}
        onRemoveFromCart={handleRemoveFromCart}
        onBuy={handleBuy}
      />
      {items.map((item) => (
        <Item key={item.name} item={item} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}

export default App;
