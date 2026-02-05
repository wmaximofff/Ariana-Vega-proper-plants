export default function CartItems({ cart, onUpdateQuantity }) { 

// need the two buttons for increase and decrease

  return (
  <div>  
    <div className="cart">
    <h2>Cart</h2>
    <ol>
      {cart.map((item) => (
        <li 
        key={item.id}>
        {item.image} {item.name}
        <div className="cart-buttons">
        <button onClick={() => onUpdateQuantity(item.id, +1)}>+</button>
        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>

        {item.quantity}
  </div>        
  </li>
        ))}
      </ol>
    </div>
  </div>

);
}