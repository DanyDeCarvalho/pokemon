"use client";
import { PokedexProps } from "types/type";

export default function Pokedex({ children }: PokedexProps) {
  return (
    <div className="w-[600px] h-[850px] bg-[#dc0a2d] relative rounded-lg shadow-lg shadow-black border-4 border-[#86051b]">
       {/* Zone du haut : cercle + boutons */}
      <div className="flex items-center gap-6 pl-6 pt-6">
        {/* Cercle LED */}
        <div className="w-12 h-12 border-4 border-white rounded-full bg-blue-700 glow-pulse led-gradient"></div>

        {/* Boutons */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-700  border border-black  led-gradient-red"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black  led-gradient-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-green-600 border border-black glow-green led-gradient-green"></div>
        </div>
      </div>

      {/* Separation Écran principal */}
      <div className="w-full h-[450px] bg-[#86051b] top-pokedex"></div>

      {/* Ecran pokedex */}
      <div className="absolute top-38 left-10 right-10 h-[350px] bg-[#51ae5f] rounded-md shadow-inner ecran-pokedex border-30 border-[#dedede] "></div>
      <div className="absolute top-45.5 left-17.5 right-17.5 h-[290px] overflow-y-auto scrollbar-none bg-white border-6 border-black">
        {children}
      </div>

      {/* Button bleu et rouge*/}
      <div className="absolute bottom-67 left-60 ">
        <div className="flex justify-center items-center gap-4">
          <div className="rounded-lg bg-[#ff002f] w-12 h-3 border border-black"></div>
          <div className="rounded-lg bg-[#056897] w-12 h-3 border border-black"></div>
        </div>
      </div>

      {/* Zone du bas */}
      <div className="flex justify-end">
        {/* Bouton */}
        <div className="absolute left-12 bottom-45 w-10 h-10 rounded-full bg-gray-800 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2),0_4px_0_rgba(0,0,0,0.5)] 
             active:translate-y-[2px] active:shadow-[inset_0_2px_0_rgba(0,0,0,0.3)] 
             transition-all duration-100 border-2 border-black"></div>
        {/* fleches */}
        <div className="absolute right-14 bottom-43 w-8 h-16 bg-gray-800 text-white font-bold rounded-t-md border-b-4 border-red-700 shadow-lg
             active:translate-y-0.5 active:border-b-2 active:shadow-sm
             transition-all duration-150"></div>
             <div className="absolute right-15 bottom-42 w-16 h-8 bg-gray-800 text-white font-bold rounded-l-md border-red-700 shadow-md
             active:translate-x-0.5 active:border-b-2 active:shadow-sm
             transition-all duration-150"></div>
             <div className="absolute right-5 bottom-42 w-16 h-8 bg-gray-800 text-white font-bold rounded-r-md border-red-700 shadow-md
             active:-translate-x-0.5 active:border-b-2 active:shadow-sm
             transition-all duration-150"></div>
        <div className="absolute right-14 bottom-33 w-8 h-14 bg-gray-800 text-white font-bold rounded-b-md  border-red-700 shadow-md
             active:-translate-y-0.5 active:border-b-2 active:shadow-sm
             transition-all duration-150"></div>
        {/* <div className="absolute w-8 h-28 bg-black right-14 bottom-32 rounded-lg shadow-lg"></div>
        <div className="absolute w-28 h-8  bg-black right-4 bottom-42 rounded-lg shadow-xl"></div> */}
      </div>

      {/* Ecran du bas */}
      <div className="flex justify-center items-center">
        <div className="absolute bg-[#51ae5f] w-56 h-31 border border-black shadow-inner shadow-xl rounded-md bottom-15"></div>
      </div>
    </div>
  );
}
