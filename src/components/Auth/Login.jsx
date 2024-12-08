// // import React from 'react';
// // import './Login.css';

// // const Login = () => {
// //   return (
// //     <div className="login-container">
// //       <h1>Login</h1>
// //       <form>
// //         <input type="text" placeholder="Username" required />
// //         <input type="password" placeholder="Password" required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login validation logic here
//     if (!email || !password) {
//       setErrorMessage("Email and password are required!");
//     } else {
//       setErrorMessage("");
//       // Proceed with form submission (e.g., API request)
//       console.log("Logging in with:", { email, password });
//     }
//   };

//   return (
//     <div className="form-container">
//       <h1>Login</h1>
//       <form id="login-form" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <div className="input-field">
//             <i className="fa-solid fa-envelope"></i>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div className="input-field">
//             <i className="fa-solid fa-lock"></i>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//           </div>

//           {errorMessage && (
//             <div id="error-message-container" className="error-message">
//               {errorMessage}
//             </div>
//           )}

//           <div id="forgot-password-button" className="recover">
//             <a href="#">Forgot password?</a>
//           </div>
//         </div>

//         <button id="login-button" type="submit">
//           Login
//         </button>
//       </form>

//       <div className="member">
//         Not a member? <a href="/signup">Register here</a>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("login data :", data);
    if (data.role === 'patient') navigate('/patient-dashboard');
    if (data.role === 'doctor') navigate('/doctor');
    if (data.role === 'admin') navigate('/admin-dashboard');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
