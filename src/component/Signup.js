import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import Navbar from './Navbar';

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onSignup = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            // console.log(user);
            const successMessage = "Registration success!";
            setMessage(successMessage);
            navigate("/Login")
        })
        .catch((error) => {
            const errorMessage = (error.message).split("/")[1].split(")")[0];
            setMessage(errorMessage);
        })
    }

    return (
    <div className="wrapper">
        <Navbar />
        <form onSubmit={onSignup} >
            <div className="signup">
                <label>
                Email address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </div>

            <div className="signup">
                <label>
                    Password
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </div>

            <button type="submit" className="enter_button">Signup</button>

            <div className="message">{message}</div>
        </form>
    </div>
    )
}

export default Signup
