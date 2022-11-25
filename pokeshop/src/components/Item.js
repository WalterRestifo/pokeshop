import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Item({
  keyValue,
  url,
  onAddToCart,
  onRemoveFromCart,
  isAddable,
}) {
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
      {isAddable ? (
        <StyledButton type="button" onClick={() => onAddToCart(infoAboutItem)}>
          Add Item
        </StyledButton>
      ) : (
        <StyledButton
          type="button"
          onClick={() => onRemoveFromCart(infoAboutItem)}
        >
          Remove Item
        </StyledButton>
      )}
    </article>
  );
}

const StyledButton = styled.button`
  background-color: blue;
  color: yellow;
`;
