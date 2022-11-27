import styled from "styled-components";

export default function CartItem({
  image,
  name,
  cost,
  counter,
  id,
  onRemoveFromCart,
}) {
  return (
    <StyledArticle key={name}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{counter}</p>
      <p>{cost}$</p>
      <StyledButton type="button" onClick={() => onRemoveFromCart(id)}>
        X
      </StyledButton>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  border-radius: 25px;
`;
