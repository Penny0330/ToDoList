import React from "react";
import { Link } from "react-router-dom";
import AddForm from "../component/AddForm";

function ListPage() {

    return(
        <div className="wrapper">

            <header>
                <h1>My To-Do List</h1>
                <ul className="title_link">
                    <li className="home"><Link to="/">Home</Link></li>
                    <li className="logout">Logout</li>
                </ul>
            </header>

            <AddForm />

        </div>
    )
};

export default ListPage;