import React from "react";

function Doctor({prenom, nom, specialite, adresse}) {
    return (
        <>  
            {prenom} {nom} | {specialite} | {adresse}
        </>
    )
}

export default Doctor;


//quels props doit avoir un médecin?
//nom
//prénom
//adresse
//identifiant unique
//numéro inami
//calendrier perso avec leurs disponibilités/ empêchements => d'ailleurs le calendrier doit être importé pour ici, et non App
//spécialité = domaine de compétences