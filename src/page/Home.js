import React, { useEffect } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import Navbar from "../component/Navbar";




function Home(){
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user){
        // const uid = user.uid;
        // console.log("uid", uid);
        navigate("/ListPage");
      }
    })
  }, [])

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
