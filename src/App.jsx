import { useState } from 'react';
import { PLANTS } from './data'
import PlantItems from './PlantItems'
import CartItems from './CartItems'

//function has to live here because setCart is stored here and it needs to be in the same place that the Cart state lives

export default function App() {
  const [cart, setCart] = useState([]);

  function updateQuantity (plantId, change) { //function should define what is being updated and by how much
    const itemExists = cart.find((item) => item.id === plantId); //find searches in the array and matches, then itemExists holds it
  
    if (itemExists) {
      setCart(
      cart.map((item) => //map allows us to go through each item in the array
        item.id === plantId
          ? { ...item, quantity: item.quantity + change } // ? is yes and changes the value
          : item
      )

    .filter((item) => item.quantity > 0)
);
  } else {
    const plantToAdd = PLANTS.find((plant) => plant.id === plantId);
    const newItem = { ...plantToAdd, quantity: 1 }; //if added for the first time it has to start at 1 and not 0
    setCart([...cart, newItem]);
  }
} 


  return (
  <div>
      <PlantItems plants={PLANTS} onAddToCart={updateQuantity} />
      <CartItems cart={cart} onUpdateQuantity={updateQuantity} />
    </div>
  );
}
