import React, { useState } from "react";
import Bandeau from "./Bandeau";
import './style.css';

function Login() {
    
    return (
        <>
            <Bandeau />
            <div className="loginPage">
                <form id="myForm">
                    <p><h2>Connection</h2></p>
                    email ou nom d'utilisateur : <br />
                    <input type="text"></input>
                    <br /> mot de passe <br />
                    <input type="password"></input>
                    <br />
                    <input type="submit" value="Se connecter"></input>
                </form>
            </div>
        </>
    )
}

export default Login;