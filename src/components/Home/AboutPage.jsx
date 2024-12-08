import React, { useState, useEffect } from "react";
import "./AboutPage.css";
import HomeNavbar from "./HomeNavbar";
import missionImg from '../../assets/images/mission-img.png';
import visionImg from '../../assets/images/vision-img.png';
import profilePic from '../../assets/images/profile-picture.png';
import clinicVideo from '../../assets/videos/clinic-video.mp4';

const teamMembers = [
  {
    name: "Aniket Kakade",
    role: "Full-Stack Developer",
    bio: "Team Leader.",
    photo: profilePic,
  },
  {
    name: "Sameer Desai",
    role: "Full-Stack Developer",
    bio: "Technically Good.",
    photo: profilePic,
  },
  {
    name: "Dinesh Sonawane",
    role: "Full-Stack Developer",
    bio: "Technically Good.",
    photo: profilePic,
  },
  {
    name: "Hardik Bhoir",
    role: "Full-Stack Developer",
    bio: "Technically Good.",
    photo: profilePic,
  },
  {
    name: "Abhay Waghmare",
    role: "Full-Stack Developer",
    bio: "Technically Good.",
    photo: profilePic,
  },
];

const offers = [
  {
    icon: "🩺",
    title: "Advanced Equipment",
    description: "State-of-the-art medical tools.",
  },
  {
    icon: "👨‍⚕️",
    title: "Qualified Doctors",
    description: "Expert healthcare professionals.",
  },
  {
    icon: "✅",
    title: "Certified Services",
    description: "Internationally recognized standards.",
  },
  {
    icon: "🚑",
    title: "Emergency Care",
    description: "24/7 healthcare assistance.",
  },
];

const testimonials = [
  {
    name: "Anthony Gonsalves",
    feedback: "DigiHealth truly revolutionized my healthcare experience!",
    stars: 5,
  },
  {
    name: "Pushpraj",
    feedback: "A seamless platform that makes healthcare accessible.",
    stars: 4,
  },
];

const About = () => {
  const [visibleTeam, setVisibleTeam] = useState(0);
  const teamDisplayCount = 3; 

  const handleTeamSlide = (direction) => {
    const totalMembers = teamMembers.length;
    if (direction === "next") {
      setVisibleTeam((prev) => (prev + 1) % totalMembers);
    } else {
      setVisibleTeam((prev) => (prev - 1 + totalMembers) % totalMembers);
    }
  };

  useEffect(() => {
    if (teamMembers.length < teamDisplayCount) {
      setVisibleTeam(0);
    }
  }, []);

  return (

    

    <div className="about-page">
      <div className="home-container">
      <HomeNavbar /> </div>
      <header className="about-header">
        <div className="header-background">
          <h1>DigiHealth</h1>
          <p>Your gateway to innovative digital healthcare.</p>
        </div>
      </header>

      <section className="about-clinic">
        <div className="content">
          <h2>ABOUT US</h2>
          <p>Welcome to the DigiHealth</p>
          <p>
          DigiHealth truly revolutionized my healthcare experience!
          A seamless platform that makes healthcare accessible..
          </p>
          <ul>
            <li>Routine and medical care</li>
            <li>Excellence in Healthcare every</li>
            <li>Building a healthy environment</li>
          </ul>
          <button className="contact-button">Contact Us</button>
        </div>
        <video
          className="clinic-video"
          src={clinicVideo}
          autoPlay
          muted
          loop
        ></video>
      </section>

      <section className="mission-vision-section">
        <div className="mission">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Revolutionizing healthcare through cutting-edge digital solutions.
            </p>
          </div>
          <img src={missionImg} alt="Mission" />
        </div>
        <div className="vision">
          <img src={visionImg} alt="Vision" />
          <div className="text">
            <h2>Our Vision</h2>
            <p>Empowering individuals with accessible healthcare tools.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="offers">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="icon">{offer.icon}</div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-carousel">
          <button
            className="arrow left"
            onClick={() => handleTeamSlide("prev")}
          >
            ◀
          </button>
          <div className="team-grid">
            {teamMembers
              .concat(teamMembers) 
              .slice(visibleTeam, visibleTeam + teamDisplayCount) 
              .map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.photo} alt={member.name} />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
          </div>
          <button
            className="arrow right"
            onClick={() => handleTeamSlide("next")}
          >
            ▶
          </button>
        </div>
      </div>

      <section className="testimonials-section">
        <h2>What People Are Saying</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="profile">
                <div className="avatar"></div>
                <h4>{testimonial.name}</h4>
                <p>{"⭐".repeat(testimonial.stars)}</p>
              </div>
              <p>"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-columns">
          <div className="column">
            <h3>Contact Us</h3>
            <p>Email: support@digihealth.com</p>
            <p>Phone: +123 456 789</p>
          </div>
          <div className="column">
            <h3>Services</h3>
            <ul>
              <li>Primary Care</li>
              <li>Emergency Care</li>
              <li>Specialist Services</li>
            </ul>
          </div>
          <div className="column">
            <h3>Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 DigiHealth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
