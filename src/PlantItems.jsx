export default function PlantItems({ plants, onAddToCart}) {

  return (
  <div>  
    <h2>Plants</h2>
    <ol>
      {plants.map((plant) => (
        <li 
        key={plant.id}>
        {plant.image} {plant.name}
        <button onClick={() => onAddToCart(plant.id, 1)}>Add to cart</button>
      </li>
      ))}
    </ol>
  </div>
);
}