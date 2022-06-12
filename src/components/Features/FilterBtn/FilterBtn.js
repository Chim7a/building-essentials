import React from 'react';
import './FIlterBtn.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterBtn = ({setRefiners}) => {
  return (
    <div className="filter__container">
      <div className="filter">
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="All" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="China Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Flush/hard wooden Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="German Copper Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="German Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Glass Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Israeli Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Turkish Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Madrid Doors" />
      <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ffffff"}} />} label="Tiles" />
      </div>
    </div>
  )
}

export default FilterBtn;