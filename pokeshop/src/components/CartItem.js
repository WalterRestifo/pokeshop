export default function CartItem({
  image,
  name,
  cost,
  counter,
  id,
  onRemoveFromCart,
}) {
  return (
    <article className="cartItem__article" key={name}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{counter}</p>
      <p>{cost}$</p>
      <button type="button" onClick={() => onRemoveFromCart(id)}>
        Remove Item
      </button>
    </article>
  );
}
