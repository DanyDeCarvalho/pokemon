import React from "react";

export type HomePageProps = {
  name: string;
  image?: string;
};

export type PokedexProps = {
  children: React.ReactNode;
};

export type AuthFormProps = {
  isConnexion: boolean;
};

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export type InputProps = {
  id?: string;
  type?: "text" | "password" | "email";
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

export type SelectionEquipeProps = {
  pokemons: any[];
  equipes: any[];
}

export type AjoutPokemonProps = {
  equipeId: string;
  pokemonId: string;
}
