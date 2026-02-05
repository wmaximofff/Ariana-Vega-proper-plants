export default function CartItems({ cart, onUpdateQuantity }) { 


  return (
  <div>  
    <h2>Cart</h2>
    <ol>
      {cart.map((item) => (
        <li 
        key={item.id}>
        {item.image} {item.name}
        <button onClick={() => onUpdateQuantity(item.id, +1)}>+</button>
        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>

        {item.quantity}
      </li>
      ))}
    </ol>
  </div>
);
}