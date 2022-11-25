import "./Cart.css";
import CartItem from "./CartItem";

export default function Cart({ cart, counter, onRemoveFromCart }) {
  return (
    <section className="cart-container">
      <h2>Cart</h2>
      {cart.map((itemOfCart) => {
        console.log("counter: ", counter);
        console.log("itemOfCart.count: ", itemOfCart.count);
        if (itemOfCart.count < counter) {
          return "";
        } else {
          return (
            <CartItem
              image={itemOfCart.image}
              name={itemOfCart.name}
              cost={itemOfCart.cost}
              count={itemOfCart.count}
              id={itemOfCart.id}
              onRemoveFromCart={onRemoveFromCart}
            />
          );
        }
      })}
      <hr />
      <p>Sum : 3200$</p>
      <button>Buy Now</button>
    </section>
  );
}
