"use client";

import Button from "./Button";
import TypewriterText from "./TypewriterText";
import { useRouter } from "next/navigation";

export default function BulleDialogue() {
  const message = `Bienvenue, dresseur ! Prépare-toi à explorer le monde de Pokemon.\n\nChoisis une option pour commencer.`;
  const router = useRouter();

  return (
    <>
      <div className="relative top-2.5 left-35 w-4 h-4 bg-white rotate-45 border-l-4 border-b-4 border-black z-2"></div>

      <div className="bg-white w-full border-4  px-4 py-3 text-black text-xs ">
        <TypewriterText text={message} speed={25} />
        <div className="flex justify-center gap-4 mt-4">
          <Button
            className="bg-yellow-400 text-black"
            onClick={() => router.push("/connexion")}
          >
            Se connecter
          </Button>
          <Button
            className="bg-red-500 text-white"
            onClick={() => router.push("/inscription")}
          >
            S&aposinscrire
          </Button>
        </div>
      </div>
    </>
  );
}
