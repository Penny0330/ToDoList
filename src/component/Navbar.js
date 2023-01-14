import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar(){


  return (
      <header>
            <h1>My To-Do List</h1>
            <ul className="title_link">
                <li className="home">
                  <NavLink to="/" 
                    className={({ isActive }) =>
                    ["title_a", isActive ? "active" : null].join(" ")}>
                    Home
                  </NavLink>
                </li>
                <li className="login">
                  <NavLink to="/Login" 
                    className={({ isActive }) =>
                    ["title_a", isActive ? "active" : null ].join(" ")}>
                    Login
                  </NavLink>
                </li>
                <li className="signup">
                  <NavLink to="/Signup" 
                    className={({ isActive }) =>["title_a", isActive ? "active" : null].join(" ")}>
                    Signup
                  </NavLink>
                </li>
            </ul>
        </header>
  )
}

export default Navbar
