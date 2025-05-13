"use server";
import HomePage from "../components/ecran/HomePage";

export default async function Home() {
  const res = await fetch("http://localhost:3000/pokemons/randomPokemon");
  const data = await res.json();
  const image =
    data.sprites?.versions?.["generation-v"]?.["black-white"]?.animated
      ?.front_default;

  return (
    <>
      <HomePage name={data.name} image={image} />
    </>
  );
}
