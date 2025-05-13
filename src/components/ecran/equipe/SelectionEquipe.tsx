'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Notification from "../amis/Notification";
import { SelectionEquipeProps } from "types/type";
import ListeEquipe from "./ListeEquipe";

export default function SelectionPokemon({ pokemons, equipes }: SelectionEquipeProps) {
  const [pokemonDetails, setPokemonDetails] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchPokemons() {
      const details = await Promise.all(
        pokemons.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemonDetails(details);
    }

    if (pokemons.length > 0) {
      fetchPokemons();
    }
  }, [pokemons]);

  if (pokemonDetails.length === 0) {
    return <div className="text-center mt-10">Chargement des pokémons...</div>;
  }

  const currentPokemon = pokemonDetails[index];
console.log('hjhhhhhhh', currentPokemon)
  const currentImage = currentPokemon?.sprites?.versions?.["generation-v"]?.["black-white"]?.animated?.front_default
    ?? currentPokemon?.sprites?.front_default
    ?? '';

  const hp = currentPokemon.stats.find((s: any) => s.stat.name === 'hp')?.base_stat;
  const attack = currentPokemon.stats.find((s: any) => s.stat.name === 'attack')?.base_stat;
  const defense = currentPokemon.stats.find((s: any) => s.stat.name === 'defense')?.base_stat;
  const speed = currentPokemon.stats.find((s: any) => s.stat.name === 'speed')?.base_stat;

  return (
    <div className="flex flex-col items-center justify-center text-black h-full">
      <Notification/>
      <motion.img
        src={currentImage}
        alt={currentPokemon.name}
        className="w-24 h-23"
      />
      <div className="absolute top-5 left-2 w-32 h-[200px] border rounded-lg ">
        <ListeEquipe equipes={equipes} pokemonId={currentPokemon.id} />
      </div>


        <ArrowBigLeft className="absolute left-10 bottom-5 w-28 h-10" onClick={() => setIndex((index - 1 + pokemonDetails.length) % pokemonDetails.length)}/>
        <ArrowBigRight className="absolute right-10 bottom-5 w-28 h-10" onClick={() => setIndex((index + 1) % pokemonDetails.length)}/>

      <div className="mt-6 text-center text-xs">
        <p className="font-bold text-center text-[14px]">{currentPokemon.name}</p>
        <p>❤️ HP:{hp}</p>
        <p>⚔️ Attaque:{attack}</p>
        <p>🛡️ Défense:{defense}</p>
        <p>💨 Vitesse:{speed}</p>
      </div>
    </div>
  );
}
