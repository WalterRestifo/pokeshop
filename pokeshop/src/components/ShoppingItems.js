import Item from "./Item";
import "./shoppingItems.css";

export default function ShoppingItems({ onAddToCart, items }) {
  return (
    <>
      {items.map((item) => (
        <Item key={item.name} item={item} onAddToCart={onAddToCart} />
      ))}
    </>
  );
}
