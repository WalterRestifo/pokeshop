import { useEffect } from "react";
import { useState } from "react";
import "./shoppingItems.css";

export default function ShoppingItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/item/");
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.alert("error");
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      {items.map((itemToRender) => (
        <article className="shoppingItem__article" key={itemToRender.name}>
          {itemToRender.name}
        </article>
      ))}
    </>
  );
}
