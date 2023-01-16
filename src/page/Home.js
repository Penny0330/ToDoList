import React from "react";
import Navbar from "../component/Navbar";

function Home(){

  return(
    <div className="wrapper">
      <Navbar />
      
      <div className="welcome">
        Create
        <br/>
        Your
        <br/>
        To-Do-List
      </div>
    </div>
  )
};

export default Home;
