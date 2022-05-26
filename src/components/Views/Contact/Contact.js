import React from 'react';
import './Contact.css';
import Navigation from '../Navigation/Navigation';

const Contact = () => {
  return (
    <div className="contact">
        <Navigation />
        <div className="contact__container">
            <div className="contact__info">
                <h1>CONTACT US</h1>
                <p> Phone - 09160335015</p>
                <p> Email - buildingessentials01@gmail.com </p>
                <p>Address—- int’l building materials market, Dei Dei fct Abuja (Head Office) </p>
            </div>

            <div className="email__contact">

                <div className="input__details">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input__message">
                    <input type="comments" placeholder="Message" />
                    <button>SEND A MESSAGE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;