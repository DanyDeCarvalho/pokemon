'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import Button from "components/Button"
import Input from "components/Input"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form";
import { z } from "zod";
import Notification from "./Notification";

export default function AmisHomePage() {
    const router = useRouter();

    const formSchema = z.object({
        username: z.string().min(1, "Nom requis"),
      });
    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(formSchema),
      });

      const demandeAmis = async (data : {username : string}) => {
        const res = await fetch("http://localhost:3000/amis/demandeAmis", {
            method: 'POST',
            credentials: 'include', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });

          const responseData = await res.json();
          console.log(responseData);

      }
    return (

        <div className="flex flex-col items-center justify-center h-full text-black ">
          <Notification/>
            <form onSubmit={handleSubmit(demandeAmis)} >
            <label htmlFor="username" className="block">
            Nom d&aposutilisateur
          </label>
          <Input id="username" {...register("username")}/>
          <p>{errors.username?.message}</p>
          <div className="flex justify-between gap-4 mt-4">
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black w-full"
            type="submit"
          >
            Envoyer
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white w-full"
            onClick={() => router.push("/")}
          >
            Retour
          </Button>
        </div>
        </form>
        </div>
    )
}