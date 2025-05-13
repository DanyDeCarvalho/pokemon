"use client";
import { motion } from "framer-motion";
import Pokedex from "../Pokedex";
import { HomePageProps } from "../../types/type";
import BulleDialogue from "../BulleDialogue";

export default function HomePage({ name, image }: HomePageProps) {
  return (
    <Pokedex>
      <div className="flex flex-col justify-end items-center w-full h-full">

          <img
            src={image}
            alt={name}
            className="w-[110px] h-[100px] "
          />
        <div>
          <BulleDialogue />
        </div>
      </div>
    </Pokedex>
  );
}
