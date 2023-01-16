import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hook/useAuthContext';

import Home from "./page/Home";
import ListPage from "./page/ListPage";
import Login from "./page/Login";
import Signup from "./page/Signup";

function App(){

    const { alreadyLogin, user } = useAuthContext();

    return(
        <div>
            {alreadyLogin && (
                <Routes>
                    <Route path="/" element={ !user ? <Home /> : <Navigate to="/ListPage" replace />} />
                    <Route path="/Login" element={ !user ? <Login /> : <Navigate to="/ListPage" replace />} />
                    <Route path="/Signup" element={ !user ? <Signup /> : <Navigate to="/ListPage" replace />}  />
                    <Route path="/ListPage" element={user ? <ListPage /> : <Navigate to="/" replace />} />
                </Routes>
            )}
        </div>
    )
}

export default App