import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import missionImg from "../assets/images/mission-img.png";
import visionImg from "../assets/images/vision-img.png";
import profilePic from "../assets/images/profile-picture.png";
import clinicVideo from "../assets/videos/clinic-video.mp4";
import { Link } from "react-router-dom";

const teamMembers = [
  { name: "Aniket Kakade", role: "Full-Stack Developer", bio: "Team Leader.", photo: profilePic },
  { name: "Sameer Desai", role: "Full-Stack Developer", bio: "Team Member.", photo: profilePic },
  { name: "Dinesh Sonawane", role: "Full-Stack Developer", bio: "Team Member.", photo: profilePic },
  { name: "Hardik Bhoir", role: "Full-Stack Developer", bio: "Team Member.", photo: profilePic },
  { name: "Abhay Waghmare", role: "Full-Stack Developer", bio: "Team Member.", photo: profilePic },
];

const offers = [
  { icon: "🩺", title: "Advanced Equipment", description: "State-of-the-art medical tools." },
  { icon: "👨‍⚕️", title: "Qualified Doctors", description: "Expert healthcare professionals." },
  { icon: "✅", title: "Certified Services", description: "Internationally recognized standards." },
  { icon: "🚑", title: "Emergency Care", description: "24/7 healthcare assistance." },
];

const testimonials = [
  { name: "Anthony Gonsalves", feedback: "DigiHealth truly revolutionized my healthcare experience!", stars: 5 },
  { name: "Pushpraj", feedback: "A seamless platform that makes healthcare accessible.", stars: 4 },
];

const About = () => {
  const [visibleTeam, setVisibleTeam] = useState(0);
  const teamDisplayCount = 3;

  const handleTeamSlide = (direction) => {
    const totalMembers = teamMembers.length;
    setVisibleTeam((prev) => (direction === "next" ? (prev + 1) % totalMembers : (prev - 1 + totalMembers) % totalMembers));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="relative h-80 bg-gradient-to-r from-blue-800 to-black flex items-center justify-center shadow-lg">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl font-extrabold mb-2">DigiHealth</h1>
          <p className="text-xl text-gray-300">Your gateway to innovative digital healthcare.</p>
        </div>
      </header>

      {/* About Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
        <div className="text-left space-y-4 md:w-1/2">
          <h2 className="text-4xl font-bold text-blue-400">About Us</h2>
          <p>Welcome to DigiHealth, where we revolutionize healthcare experiences through seamless technology.</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Routine and specialized medical care</li>
            <li>Excellence in Healthcare for everyone</li>
            <li>Building a healthy digital ecosystem</li>
          </ul>
          <Link to="/contact" className="inline-block mt-4">
            <span className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md transition block">
              Contact Us
            </span>
          </Link>
        </div>

        <video className="rounded-lg shadow-lg mt-6 md:mt-0 md:w-1/2" src={clinicVideo} autoPlay muted loop></video>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-8 mt-12 px-6 md:px-16">
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-xl">
          <img src={missionImg} alt="Mission" className="w-1/3 rounded-lg" />
          <div className="ml-6">
            <h2 className="text-3xl font-bold text-blue-400">Our Mission</h2>
            <p className="text-gray-300">Revolutionizing healthcare through cutting-edge digital solutions.</p>
          </div>
        </div>
        <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-xl">
          <div className="mr-6">
            <h2 className="text-3xl font-bold text-blue-400">Our Vision</h2>
            <p className="text-gray-300">Empowering individuals with accessible healthcare tools.</p>
          </div>
          <img src={visionImg} alt="Vision" className="w-1/3 rounded-lg" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="text-2xl font-semibold">{offer.title}</h3>
              <p className="text-gray-300">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mt-12 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Meet the Team</h2>
        <div className="flex justify-center items-center space-x-4">
          <button onClick={() => handleTeamSlide("prev")} className="text-3xl text-blue-500 hover:text-blue-400">◀</button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.slice(visibleTeam, visibleTeam + teamDisplayCount).map((member, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mx-auto shadow-md" />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <p className="text-gray-300 mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
          <button onClick={() => handleTeamSlide("next")} className="text-3xl text-blue-500 hover:text-blue-400">▶</button>
        </div>
      </section>
    </div>
  );
};

export default About;