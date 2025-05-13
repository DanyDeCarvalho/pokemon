'use server';

import SelectionPokemon from "components/ecran/equipe/SelectionEquipe";
import Pokedex from "components/Pokedex";

export default async function EquipePage() {
    const res = await fetch("https://pokemonapi-production-b931.up.railway.app/pokemons/pokemons");
    const data = await res.json();

    const equipes = await fetch("https://pokemonapi-production-b931.up.railway.app/equipe/equipes");
    const dataEquipes = await equipes.json();


    return (
        <Pokedex>
            <SelectionPokemon pokemons={data} equipes={dataEquipes} />
        </Pokedex>
    );
}
