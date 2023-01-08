import React,{ useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  
  useEffect(()=>{
  // fetch("http://localhost:6001/plants")
  // .then(res=>res.json())
  // .then((data)=>{
  //   setPlants(data)
  //   setFilteredPlants(data)
  // })
  updatePlants();

},[])

function updatePlants() {
  fetch("http://localhost:6001/plants")
  .then(res=>res.json())
  .then((data)=>{
    setPlants(data)
    setFilteredPlants(data)
  })
}

function toSearch(text){
  const newPlants=plants.filter((plant)=>plant.name.toLowerCase().includes(text.toLowerCase()))
  setFilteredPlants(newPlants)
}

function toSubmit(){
  updatePlants();
}
  return (
    <main>
      <NewPlantForm toSubmit={toSubmit}  />
      <Search toSearch={toSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
