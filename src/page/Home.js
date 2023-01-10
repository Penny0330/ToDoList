import React from "react";
import { Link } from "react-router-dom";


function Home(){

    return(
            <div className="wrapper">

                <header>
                    <h1>My To-Do List</h1>
                    <ul className="title_link">
                        <li className="home">Home</li>
                        <li className="login">Login</li>
                        <li className="signup">Signup</li>
                    </ul>
                </header>

                <Link to="/ListPage"><button className="enter_button">點此進入</button></Link>

            </div>
    )
};

export default Home