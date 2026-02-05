import { useState } from 'react';
import { PLANTS } from './data'
import PlantItems from './PlantItems' //no brackets because it has export default on their jsx files
import CartItems from './CartItems'

//the below function has to live here because setCart is stored here and it needs to be in the same place that the Cart state lives
//if quantity of cart is 0 then it is removed from the cart

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
  <main>
      <PlantItems plants={PLANTS} onAddToCart={updateQuantity} />
      <CartItems cart={cart} onUpdateQuantity={updateQuantity} />
    </main>
  );
}
