import React from "react";
import Bandeau from './Bandeau';
import Recherche from './Recherche';

function Accueil() {
    return (
        <>
            <h1>Docteur AnyWhere</h1>
            <Bandeau />
            <Recherche />
        </>
    )
}

export default Accueil;