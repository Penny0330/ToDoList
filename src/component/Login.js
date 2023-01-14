import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      navigate("/ListPage");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = (error.message).split("/")[1].split(")")[0];
      console.log(errorCode, errorMessage);
      
      setMessage(errorMessage);
    })
  }

  return (
    <div className="wrapper">
      <Navbar />
      <form onSubmit={onLogin} >
        <div className="sigin">
          <label>
            Email address
          </label>
          <input
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              required />
        </div>

        <div className="sigin">
          <label>
            Password
          </label>
          <input
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              required />
        </div>

        <button type="submit" className="enter_button">Login</button>

        <div className="message">{message}</div>
      </form>
    </div>

  )
}

export default Login
