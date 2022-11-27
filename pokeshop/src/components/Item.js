import styled from "styled-components";

export default function Item({ item, onAddToCart }) {
  return (
    <article className="shoppingItem__article">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.cost}$</p>
      <StyledButton type="button" onClick={() => onAddToCart(item)}>
        Add Item
      </StyledButton>
    </article>
  );
}

const StyledButton = styled.button`
  background-color: blue;
  color: yellow;
`;
