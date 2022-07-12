import React from 'react';
import './Home.css';
import Navigation from '../Navigation/Navigation';
import CompanyHeader from '../../Features/CompanyHeader/CompanyHeader';
import ViewProductBtn from '../../Features/Button/ViewProductBtn';


const Home = () => {
  return (
    <div className="home">
        <Navigation />
        <div className="home__container home__container__mobile">
          <CompanyHeader />
          <p> Importer and distributor of all kinds of buildings materials such as:
             Armored doors, Turkish doors, German doors, Israeli doors, American steel doors,
             PVC aluminum doors, French panel doors, China doors, Tiles and Marbles. 
          </p>
          <ViewProductBtn />
        </div>
    </div>
  )
}

export default Home;