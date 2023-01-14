import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ListPage from "./page/ListPage";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ListPage" element={<ListPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default App