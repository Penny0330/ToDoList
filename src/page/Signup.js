import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useSignup } from '../hook/useSignup';

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, error, pending } = useSignup();

    const onSignup = (e) => {
        e.preventDefault();
        signup(email, password);
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

            {!pending && (
                <button type="submit" className="enter_button">Signup</button>
            )}
            {pending && (
                <button  className="enter_button">Loading...</button>
            )}
            
            

            {error && <div className="message">{error}</div>}
        </form>
    </div>
    )
}

export default Signup
