"use client";
import Button from "components/Button";
import Input from "components/Input";
import { useRouter } from "next/navigation";
import { AuthFormProps } from "types/type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default  function AuthForm({ isConnexion }: AuthFormProps) {
  const router = useRouter();

  const formSchema = z.object({
    username: z.string().min(1, "Nom requis"),
    email: isConnexion
      ? z.string().optional()
      : z.string().email("Email invalide"),
    password: z.string().min(6, "Mot de passe trop court"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleLogin = async (data: {
    username: string;
    email?: string;
    password: string;
  }) => {
    if (isConnexion) {
      const res = await fetch("http://localhost:3000/auth/connexion", {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await res.json();
      console.log("Connexion :", responseData);
      if (res.ok) {
        router.push("/mainmenu");
      } else {
        console.log("Erreur de connexion");
      }
    } else {
      const res = await fetch('http://localhost:3000/auth/inscription', {
  method: 'POST',
  credentials: 'include', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
      const responseData = await res.json();
      console.log("Inscription :", responseData);
      if (res.ok) {
        router.push("/mainmenu");
      } else {
        console.log("Erreur d'inscription");
      }
     
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="w-full p-6 text-xs space-y-4 text-black">
        <h1 className="text-center text-base mb-2">
          {isConnexion ? "Connexion" : "S'inscrire"}
        </h1>

        <div className="space-y-2">
          <label htmlFor="username" className="block">
            Nom d'utilisateur
          </label>
          <Input id="username" {...register("username")}  />
          <p>{errors.username?.message}</p>

          {!isConnexion && (
            <>
              <label htmlFor="email" className="block mt-2">
                Email
              </label>
              <Input id="email" type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </>
          )}

          <label htmlFor="password" className="block mt-2">
            Mot de passe
          </label>
          <Input  id="password" type="password" {...register("password")} />
          <p>{errors.password?.message}</p>

        </div>

        <div className="flex justify-between gap-4 mt-4">
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black w-full"
            type="submit"
          >
            {isConnexion ? "Se Connecter" : "S'inscrire"}
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white w-full"
            onClick={() => router.push("/")}
          >
            Retour
          </Button>
        </div>
      </div>
    </form>
  );
}
