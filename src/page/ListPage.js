import { signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddForm from "../component/AddForm";
import { auth } from "../firebase/firebase.config";

function ListPage() {

    const navigate = useNavigate();

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if(!user){
          navigate("/Login");
        }
      })
    }, [])

    const handleLogout = () => {
        signOut(auth).then(()=>{
            navigate("/")
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log("An error happened");
        })
    };

    return(
        <div className="wrapper">

            <header>
                <h1>My To-Do List</h1>
                <ul className="title_link">
                    <li className="logout" onClick={handleLogout}>Logout</li>
                </ul>
            </header>

            <AddForm />
        </div>
    )
};

export default ListPage;