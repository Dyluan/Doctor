import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function Recherche() {

    const navigate = useNavigate();

    const [nomDocteur, setNomDocteur] = useState('');
    const [adresse, setAdresse] = useState('');
    const [resultats, setResultats] = useState([]);

    const handleClick = (event) => {
        event.preventDefault();
        nomDocteur ? console.log(nomDocteur) : console.log(adresse);

        navigate(`/search?query=${nomDocteur}`);
        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => setResultats(json));
            } catch (error) {
                alert('Error fetching Data ' + error);
            }
        }
        if (nomDocteur) {
            fetchData();
            console.log(resultats);
        }
    }, [nomDocteur])

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