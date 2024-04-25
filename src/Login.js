import React, { useState } from "react";
import Bandeau from "./Bandeau";
import './style.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(event) {
        event.preventDefault();

        console.log('Utilisateur : ' + username + '\nMot de passe : ' + password);
    }

    return (
        <>
            <Bandeau />
            <div className="loginPage">
                <form id="myForm" onSubmit={handleClick}>
                    <h2>Connection</h2>
                    email ou nom d'utilisateur : <br />
                    <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
                    <br /> mot de passe <br />
                    <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <br />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
        </>
    )
}

export default Login;