'use server';

import SelectionPokemon from "components/ecran/equipe/SelectionEquipe";
import Pokedex from "components/Pokedex";

export default async function EquipePage() {
    const res = await fetch("http://localhost:3000/pokemons/pokemons");
    const data = await res.json();

    const equipes = await fetch("http://localhost:3000/equipe/equipes");
    const dataEquipes = await equipes.json(); 


    return (
        <Pokedex>
            <SelectionPokemon pokemons={data} equipes={dataEquipes} />
        </Pokedex>
    );
}
