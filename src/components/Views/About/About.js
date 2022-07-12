import React from 'react';
import './About.css';
import CompanyHeader from '../../Features/CompanyHeader/CompanyHeader';
import Navigation from '../Navigation/Navigation';


const About = () => {
  return (
    <div className="about">
        <Navigation />
        <div className="about__info">
          <div>
            <CompanyHeader />
          </div>
          <div className="about__text">
              <p>Building Essentials is a company fully registered with the Nigerian CAC to carry-out legitimate business transactions and to offer related services.

              The company was founded in 2021 and ever since  has grown into one of the foremost importer and distributor of quality and yet affordable wide range of household building materials and related services.

              Our products includes; Luxurious and Security doors for homes and offices, Tiles and marble of all kinds 

              Our services which are guaranteed to offer maximum customer/client satisfaction includes ;

              The Installation of Handrails.
              Installation of Stamped Floor.

              We represent some of the best brands in the world. 

              Our Vision is to be the No. 1 destination for luxury, safe and affordable building materials in Africa.

              Our Mission is to help everyone own a luxury, safe and affordable home through the delivery of quality building materials from world class brands employing a motivated and skilled professionals driven by innovation and technology.
              </p>
          </div>
        </div>
    </div>
  )
}

export default About;