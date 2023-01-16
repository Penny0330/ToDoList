import React from 'react';
import { NavLink } from "react-router-dom";
import { useLogout } from '../hook/useLogout';
import { useAuthContext } from '../hook/useAuthContext';

function Navbar(){
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
      <header>
            <h1>My To-Do List</h1>
            {!user && (
              <ul className="title_link">
                <li className="home_link">
                  <NavLink to="/" 
                    className={({ isActive }) =>
                    ["title_a", isActive ? "active" : null].join(" ")}>
                    Home
                  </NavLink>
                </li>
                <li className="login_link">
                  <NavLink to="/Login" 
                    className={({ isActive }) =>
                    ["title_a", isActive ? "active" : null ].join(" ")}>
                    Login
                  </NavLink>
                </li>
                <li className="signup_link">
                  <NavLink to="/Signup" 
                    className={({ isActive }) =>["title_a", isActive ? "active" : null].join(" ")}>
                    Signup
                  </NavLink>
                </li>
              </ul>
            )}

            {user && (
              <ul className="title_link">
                <li className="logout title_a"onClick={logout}>Logout</li>
              </ul>
            )}
        </header>
  )
}

export default Navbar
