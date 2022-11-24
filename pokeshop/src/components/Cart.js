import "./Cart.css";
import Item from "./Item";

export default function Cart({ cart }) {
  return (
    <section className="cart-container">
      <h2>Cart</h2>
      {cart.map((itemOfCart) => (
        <Item
          key={itemOfCart.name}
          keyValue={itemOfCart.name}
          url={itemOfCart.url}
        />
      ))}
    </section>
  );
}
