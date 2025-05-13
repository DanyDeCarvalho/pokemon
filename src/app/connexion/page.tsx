"use server";

import AuthForm from "components/ecran/AuthForm";
import Pokedex from "components/Pokedex";

export default async function Connexion(){
    return(
        <Pokedex>
            <AuthForm isConnexion={true}/>
        </Pokedex>
    )
}