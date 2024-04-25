import React, {useState} from "react";
import Doctor from "./Doctor";
import Bandeau from "./Bandeau";
import Recherche from "./Recherche";

function DoctorList() {

    const [listOfDoctors, setListOfDoctors] = useState([{prenom:'Dily', nom:'P', specialite:'fouiller dans ton âme', adresse:'Alôdylaan'}, {prenom:'Laeti', nom:'Soso', specialite:'te casser la figure', adresse:'tu as regardé dans tes fesses?'}]);

    return (
        <>
            <Bandeau />
            <Recherche />
            <p>Liste de médecins : </p>
            
        </>
    )
}

export default DoctorList;

/*
<select>
                {listOfDoctors.map((elem) => (
                    <option value={elem.nom}>
                        <Doctor prenom={elem.prenom} nom={elem.nom} specialite={elem.specialite} adresse={elem.adresse} />
                    </option>
                ))}
            </select>
            */