import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ListPage from "./page/ListPage";

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ListPage" element={<ListPage />} />
            </Routes>
        </Router>
    )
}

export default App