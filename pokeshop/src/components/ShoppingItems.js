import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";
import "./shoppingItems.css";

export default function ShoppingItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/item/");
        const data = await response.json();
        setItems(data.results);
        console.log(data.results);
      } catch (error) {
        console.alert("error by fetching in ShoppingItems.js");
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      {items.map((itemToRender) => (
        <Item
          key={itemToRender.name}
          keyValue={itemToRender.name}
          url={itemToRender.url}
        />
      ))}
    </>
  );
}
