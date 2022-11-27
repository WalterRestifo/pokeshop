import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart({ items, onRemoveFromCart }) {
  return (
    <section className="cart-container">
      <h2>Cart</h2>
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
        {items.map((item) => item.counter * item.cost).reduce((a, b) => a + b)}
      </p>
      <button>Buy Now</button>
    </section>
  );
}
