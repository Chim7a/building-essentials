import React from 'react';
import './About.css';
import CompanyHeader from '../../Features/CompanyHeader/CompanyHeader';
import Navigation from '../Navigation/Navigation';
import AboutData from './AboutData.json';

const About = () => {
  return (
    <div className="about">
        <Navigation />
        <div className="about__info">
          <div>
            <CompanyHeader />
          </div>
          <div className="about__text">
            {AboutData.aboutMessage.map((about, i ) => (
              <p>{about.aboutText}</p>
            ))}
              
          </div>
        </div>
    </div>
  )
}

export default About;