import React from 'react';
import './FIlterBtn.css';

const FilterBtn = ({setRefiners}) => {
  return (
    <div className="Products__container">
        <button >All</button>
        <button>China Doors</button>
        <button>Flush/hard wooden Doors</button>
        <button>German Copper Doors</button>
        <button>German Doors</button>
        <button>Glass Doors</button>
        <button>Israeli Doors</button>
        <button>Turkish Doors</button>
        <button>Madrid Doors</button>
        <button>Tiles</button>
    </div>
  )
}

export default FilterBtn;