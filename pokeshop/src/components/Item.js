import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Item({ keyValue, url, onAddToCart, isAddable }) {
  const [infoAboutItem, setInfoAboutItem] = useState({
    image: "",
    cost: 0,
    name: "",
    url: "",
  });
  useEffect(() => {
    async function fetchInfoAboutItem() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setInfoAboutItem({
          image: data.sprites.default,
          cost: data.cost,
          name: data.name,
          url: url,
          id: nanoid(),
        });
        console.log(data);
      } catch (error) {
        console.error("error by fetching in Items.js", url);
      }
    }
    fetchInfoAboutItem();
  }, []);
  return (
    <article className="shoppingItem__article" key={keyValue}>
      <img src={infoAboutItem.image} alt={infoAboutItem.name} />
      <p>{infoAboutItem.name}</p>
      <p>{infoAboutItem.cost}$</p>
      {isAddable && (
        <button type="button" onClick={() => onAddToCart(infoAboutItem)}>
          Add Item
        </button>
      )}
    </article>
  );
}
