import React, { useState } from "react";

function NewPlantForm({toSubmit}) {
const [name,setName]=useState("")
const [image, setImage]=useState("")
const [price, setPrice]=useState(0)

function handleSubmit(e){
  // e.prevent.default()
  e.preventDefault();
  const newData ={
    name:name,
    image:image,
    price:price,
  };

  fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json"
    },
    body:JSON.stringify(newData)
  })
  .then(res=>res.json())
  .then(toSubmit())
}


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
