import React,{ useState } from "react";

function PlantCard({plant}) {

const {name,image,price} = plant;
const[inStock, setInStock]=useState(true)

function handleInstock(){
  setInStock(false)
}

function handleOutofstock(){
  setInStock(true)
}
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleInstock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleOutofstock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
