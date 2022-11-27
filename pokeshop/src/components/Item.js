import styled from "styled-components";

export default function Item({ item, onAddToCart }) {
  return (
    <StyledArticle className="shoppingItem__article">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.cost}$</p>
      <StyledButton type="button" onClick={() => onAddToCart(item)}>
        Add Item
      </StyledButton>
    </StyledArticle>
  );
}

const StyledButton = styled.button`
  background-color: blue;
  color: yellow;
`;

const StyledArticle = styled.article`
  border: 2px solid;
  margin: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
`;
