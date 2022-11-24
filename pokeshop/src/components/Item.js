import { useEffect, useState } from "react";

export default function Item({ keyValue, url }) {
  const [infoAboutItem, setInfoAboutItem] = useState({
    image: "",
    cost: 0,
    name: "",
  });

  useEffect(() => {
    async function fetchInfoAboutItem() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("data: ", data);
        setInfoAboutItem({
          image: "",
          cost: data.cost,
          name: data.name,
        });
      } catch (error) {
        console.error("error by fetching in Items.js", url);
      }
    }
    fetchInfoAboutItem();
  }, []);
  console.log("infoAboutItem: ", infoAboutItem);
  return (
    <article className="shoppingItem__article" key={keyValue}>
      <p>{infoAboutItem.name}</p>
      <p>{infoAboutItem.cost}$</p>
    </article>
  );
}
