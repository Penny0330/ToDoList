import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useLogin } from '../hook/useLogin';

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, pending } = useLogin();

  const onLogin = (e) => {
      e.preventDefault();
      login(email, password);
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

        {!pending && (
                <button type="submit" className="enter_button login_button">Login</button>
        )}
        {pending && (
            <button className="enter_button login_button">Loading ...</button>
        )}

        {error && <div className="message">{error}</div>}
      </form>
    </div>

  )
}

export default Login
