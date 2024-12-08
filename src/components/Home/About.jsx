import React from 'react';
import HomeNavbar from './HomeNavbar';
import './Home.css';

const About = () => {
  return (
    <div className="home-container">
      <HomeNavbar />
      <main>
        <h1>About Us</h1>
        <p>
          DigiHealth is your digital healthcare solution. Our platform allows you to 
          book appointments with doctors, manage your medical records, and access 
          personalized healthcare services. We aim to make healthcare accessible and 
          hassle-free for everyone.
        </p>
      </main>
    </div>
  );
};

export default About;
