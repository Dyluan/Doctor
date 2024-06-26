import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Bandeau() {
    return (
        <>
            <div className="top-right-container">
                <p className="home"><Link to='/'>Home</Link></p>
                <p className="login"><Link to='/login'>Connection</Link></p>
                <p className="language">FR</p>
            </div>
        </>
    )
}

export default Bandeau;