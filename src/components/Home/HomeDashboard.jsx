// import React from 'react';
// import Slider from "react-slick";
// import HomeNavbar from './HomeNavbar';
// import Footer from './Footer';
// import './Home.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const Home = () => {

//   const settings = {
//     dots: true,           // Show navigation dots
//     infinite: true,       // Infinite looping
//     speed: 500,           // Transition speed
//     slidesToShow: 3,      // Number of slides to show at once
//     slidesToScroll: 1,    // Scroll one slide at a time
//     autoplay: true,       // Auto scroll
//     autoplaySpeed: 3000,  // Auto scroll speed
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="home-container">
//       <HomeNavbar />
//       <main>
//         <h1>Welcome to DigiHealth</h1>
//         <p>Your healthcare solution in the digital age.</p>

//         {/* Horizontal Carousel */}
//         <Slider {...settings}>
//           <div className="carousel-item">
//             <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
            
//           </div>
//           <div className="carousel-item">
//             <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
           
//           </div>
//           <div className="carousel-item">
//             <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
            
//           </div>
//           <div className="carousel-item">
//             <img src="https://via.placeholder.com/300x200" alt="Slide 4" />
            
//           </div>
//           <div className="carousel-item">
//             <img src="https://via.placeholder.com/300x200" alt="Slide 5" />
            
//           </div>
//         </Slider>

//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import Slider from "react-slick";
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/homeImages/img1.jpg';
import img2 from '../../assets/homeImages/img2.jpg';
import img3 from '../../assets/homeImages/img3.jpg';
import img4 from '../../assets/homeImages/img4.jpg';
import img5 from '../../assets/homeImages/img5.jpg';

const Home = () => {

  const settings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Infinite looping
    speed: 500,           // Transition speed
    slidesToShow: 3,      // Number of slides to show at once
    slidesToScroll: 1,    // Scroll one slide at a time
    autoplay: true,       // Auto scroll
    autoplaySpeed: 3000,  // Auto scroll speed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="home-container">
      <HomeNavbar />
      <main>
        <h1>Welcome to DigiHealth</h1>
        <p>Your healthcare solution in the digital age.</p>

        {/* Horizontal Carousel */}
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={img1} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} alt="Slide 4" />
          </div>
          <div className="carousel-item">
            <img src={img5} alt="Slide 5" />
          </div>
        </Slider>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
