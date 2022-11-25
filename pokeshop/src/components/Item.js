import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Item({ keyValue, url, onAddToCart }) {
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
          id: data.id,
        });
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
      <StyledButton type="button" onClick={() => onAddToCart(infoAboutItem)}>
        Add Item
      </StyledButton>
    </article>
  );
}

const StyledButton = styled.button`
  background-color: blue;
  color: yellow;
`;
