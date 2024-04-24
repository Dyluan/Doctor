import React, {useState} from "react";

function Recherche() {

    const [nomDocteur, setNomDocteur] = useState('');
    const [adresse, setAdresse] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        nomDocteur ? console.log(nomDocteur) : console.log(adresse);
        
    }

    return (
        <>
            <br />
            <form onSubmit={handleClick}>
                <input type="text" placeholder="Médecin généraliste" onChange={(e) => setNomDocteur(e.target.value)}></input>
                <input type="text" placeholder="Adresse, région ou ville" onChange={(e) => setAdresse(e.target.value)}></input>
                <button type="submit">Recherche</button>
            </form>
        </>
    )
}

export default Recherche;