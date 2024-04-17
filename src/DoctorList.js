import React, {useState} from "react";
import Doctor from "./Doctor";

function DoctorList() {

    const [listOfDoctors, setListOfDoctors] = useState([{prenom:'Dily', nom:'P', specialite:'fouiller dans ton âme', adresse:'Alôdylaan'}, {prenom:'Laeti', nom:'Soso', specialite:'te casser la figure', adresse:'tu as regardé dans tes fesses?'}]);

    return (
        <>
            <p>Liste de médecins : </p>
            <select>
                {listOfDoctors.map((elem) => (
                    <option value={elem.nom}>
                        <Doctor prenom={elem.prenom} nom={elem.nom} specialite={elem.specialite} adresse={elem.adresse} />
                    </option>
                ))}
            </select>
        </>
    )
}

export default DoctorList;