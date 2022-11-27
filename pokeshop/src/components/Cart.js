import styled from "styled-components";
import CartItem from "./CartItem";

export default function Cart({ items, onRemoveFromCart, onBuy }) {
  return (
    <StyledSection>
      <StyledH2>Cart</StyledH2>
      {items
        .filter((item) => item.counter > 0)
        .map((items) => {
          return (
            <CartItem
              image={items.image}
              name={items.name}
              cost={items.cost}
              counter={items.counter}
              id={items.id}
              onRemoveFromCart={onRemoveFromCart}
            />
          );
        })}
      <hr />

      <p>
        Sum :{" "}
        {items.length === 0
          ? 0
          : items
              .map((item) => item.counter * item.cost)
              .reduce((a, b) => a + b)}
        $
      </p>
      <button onClick={onBuy}>Buy Now</button>
    </StyledSection>
  );
}

const StyledH2 = styled.h2`
  font-size: medium;
  text-align: left;
`;

const StyledSection = styled.section`
  grid-column: span 2;
`;
