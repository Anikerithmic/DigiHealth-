// import React from 'react';
// import './Signup.css';

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <h1>Signup</h1>
//       <form>
//         <input type="text" placeholder="Username" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import "./Signup.css"; // Link to the signup CSS file

const Signup = () => {
  return (
    <div className="form-container">
      <h1>Sign-Up</h1>
      <form id="signup-form" method="post">
        <div className="input-group">
          <div className="input-field">
            <i className="fa-solid fa-user"></i> {/* FontAwesome Icon */}
            <input id="name" type="text" placeholder="Name" required />
          </div>

          <div className="input-field">
            <i className="fa-solid fa-envelope"></i> {/* FontAwesome Icon */}
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div id="error-message-container" className="error-message"></div>

          <div className="input-field">
            <i className="fa-solid fa-phone"></i> {/* FontAwesome Icon */}
            <input id="phone" type="tel" placeholder="Phone" required />
          </div>

          <div className="input-field">
            <i className="fa-solid fa-lock"></i> {/* FontAwesome Icon */}
            <input id="password" type="password" placeholder="Password" required />
          </div>
        </div>

        <button type="submit" id="signup-button">Sign Up</button>
      </form>

      <div className="member">
        Already a member?{" "}
        <a href="/login">Login here</a>
      </div>
    </div>
  );
};

export default Signup;



