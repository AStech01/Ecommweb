import React, { useState } from 'react';
import './Login.css'; // Create a CSS file for the styles

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { username, password });
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Modal Login Form</h2>
      <button onClick={() => setIsOpen(true)} style={{ width: 'auto' }}>Login</button>

      {isOpen && (
        <div className="modal">
          <form className="modal-content animate" onSubmit={handleLogin}>
            <div className="imgcontainer">
              <span onClick={() => setIsOpen(false)} className="close" title="Close Modal">&times;</span>
              <img src="img_avatar2.png" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input 
                type="text" 
                placeholder="Enter Username" 
                name="uname" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />

              <label htmlFor="psw"><b>Password</b></label>
              <input 
                type="password" 
                placeholder="Enter Password" 
                name="psw" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" defaultChecked name="remember" /> Remember me
              </label>
            </div>

            <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
              <button type="button" onClick={() => setIsOpen(false)} className="cancelbtn">Cancel</button>
              <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      )}

      <style>
        {`
          /* Include your CSS styles here or link to an external stylesheet */
          body {font-family: Arial, Helvetica, sans-serif;}
          input[type=text], input[type=password] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            box-sizing: border-box;
          }
          button {
            background-color: #04AA6D;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }
          button:hover {
            opacity: 0.8;
          }
          .cancelbtn {
            width: auto;
            padding: 10px 18px;
            background-color: #f44336;
          }
          .modal {
            display: flex;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
            padding-top: 60px;
            justify-content: center;
            align-items: center;
          }
          .modal-content {
            background-color: #fefefe;
            margin: 5% auto 15% auto;
            border: 1px solid #888;
            width: 80%;
          }
          .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
          }
          .close:hover,
          .close:focus {
            color: red;
            cursor: pointer;
          }
          .animate {
            animation: animatezoom 0.6s;
          }
          @keyframes animatezoom {
            from {transform: scale(0)} 
            to {transform: scale(1)}
          }
          @media screen and (max-width: 300px) {
            span.psw {
               display: block;
               float: none;
            }
            .cancelbtn {
               width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;