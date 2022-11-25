import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, onRemoveFromCart }) {
  return (
    <section className="cart-container">
      <h2>Cart</h2>
      {cart.map((itemOfCart) => (
        <CartItem
          image={itemOfCart.image}
          name={itemOfCart.name}
          cost={itemOfCart.cost}
          count
          id={itemOfCart.id}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
      <hr />
      <p>Sum : 3200$</p>
      <button>Buy Now</button>
    </section>
  );
}
