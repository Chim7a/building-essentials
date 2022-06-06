import React from 'react';
import './FIlterBtn.css';


const categoryData = [
  { name: "All" }, 
  { name: "China Doors" },
  { name: "Flush/hard wooden Doors" }, 
  { name: "German Copper Doors" },
  { name: "German Doors" }, 
  { name: "Glass Doors" },
  { name: "Israeli Doors" }, 
  { name: "Turkish Doors" },
  { name: "Madrid Doors" }, 
  { name: "Tiles" }
];

const FilterBtn = () => {
  return (
    <div className="Products__container">
        {categoryData.map((category) => (
        <button>{category.name}</button>
      ))}
    </div>
  )
}

export default FilterBtn;