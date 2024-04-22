import React from "react";
import { Link } from "react-router-dom";

function Bandeau() {
    return (
        <>
            <p><Link to='/'>Home</Link></p>
            <p><Link to='/login'>Connection</Link></p>
            <p>FR</p>
        </>
    )
}

export default Bandeau;