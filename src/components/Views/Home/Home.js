import React from 'react';
import Navigation from '../Navigation/Navigation';
import Button from '@mui/material/Button';
import './Home.css';


const Home = () => {
  return (
    <div className="home home1">
        <Navigation />
        <div className="home__container home__container__mobile">
          <div className="home__title">
          <h1>Building<span className="home__header">Essentials</span></h1>
          <p>Aesthetic at its peak </p>
          </div>

          <p> Importer and distributor of all kinds of buildings materials such as:
             Armored doors, Turkish doors, German doors, Israeli doors, American steel doors,
             PVC aluminum doors, French panel doors, China doors, Tiles and Marbles. 
          </p>
          <Button variant="outlined" style={{borderColor:"white", color:"#daa520", width:"30%", marginTop:"10px", fontWeight:"bolder" }} >View Product</Button>
        </div>
    </div>
  )
}

export default Home;