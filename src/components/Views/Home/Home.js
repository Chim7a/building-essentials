import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
        <Navigation />
        <div className="home__container">
          <div className="home__title">
          <h1>Building<span className="home__header">Essentials</span></h1>
          <p>Aesthetic at its peak </p>
          </div>

          <p> Importer and distributor of all kinds of buildings materials such as:
             Armored doors, Turkish doors, German doors, Israeli doors, American steel doors,
             PVC aluminum doors, French panel doors, China doors, tiles and marble 
          </p>
        </div>
    </div>
  )
}

export default Home;