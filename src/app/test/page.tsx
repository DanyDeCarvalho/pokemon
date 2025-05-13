// app/connexion/page.tsx
"use client";

import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";

export default function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // logique à implémenter plus tard
    console.log("Connexion :", username, password);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#3e4754] px-4">
      <div className="w-full max-w-sm bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-6 font- text-xs leading-tight space-y-4">
        <h1 className="text-center text-base mb-2">Connexion</h1>

        <div className="space-y-2">
          <label htmlFor="username" className="block">
            Nom d'utilisateur
          </label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password" className="block mt-2">
            Mot de passe
          </label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <Button
            className="bg-yellow-400 text-black w-full"
            onClick={handleLogin}
          >
            Se connecter
          </Button>
          <Button className="bg-red-500 text-white w-full">Retour</Button>
        </div>
      </div>
    </main>
  );
}
