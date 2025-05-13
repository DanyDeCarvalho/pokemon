'use server'

import AmisHomePage from "components/ecran/amis/AmisHomePage"
import Pokedex from "components/Pokedex"



export default async function AmisPage() {
    return (
        <Pokedex>
            <AmisHomePage/>
        </Pokedex>
    )
}