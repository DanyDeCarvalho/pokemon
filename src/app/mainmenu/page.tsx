'use server'

import Menu from "components/ecran/Menu"
import Pokedex from "components/Pokedex"


export default async function MainMenu(){
    return(
        <Pokedex>
            <Menu/>
        </Pokedex>
    )
}