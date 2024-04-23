import React from "react";
import Bandeau from "./Bandeau";

function Login() {
    return (
        <>
            <Bandeau />
            <p><h2>Connection</h2></p>
            <form>
                email ou nom d'utilisateur : <br />
                <input type="text"></input>
                <br /> mot de passe <br />
                <input type="password"></input>
            </form>
        </>
    )
}

export default Login;