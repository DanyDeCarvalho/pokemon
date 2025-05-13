'use client'

import Button from "components/Button"
import { AjoutPokemonProps } from "types/type";

export default function AjoutPokemon({ equipeId, pokemonId }: AjoutPokemonProps) {

    const ajouterPokemonAEequipe = async ({ equipeId, pokemonId }: AjoutPokemonProps) => {
        try {
            console.log(pokemonId);
            const res = await fetch(`https://pokemonapi-production-b931.up.railway.app/equipe/equipe/${equipeId}/pokemon`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pokemon: pokemonId,
                }),

            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Erreur lors de l'ajout du Pokémon");
            }


        } catch (error: any) {

        }
    };

    return (
        <Button onClick={() => ajouterPokemonAEequipe({ equipeId, pokemonId })}
            className="border-1 border-black shadow-md hover:bg-gray-100 text-[8px] w-11/12"
        >
            <p className=" ml-1 truncate w-full overflow-hidden text-ellipsis text-[6px]"> + Pokemon</p>
        </Button>
    )
}