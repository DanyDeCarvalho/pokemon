'use client'

import Button from "components/Button"
import Input from "components/Input";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const transitionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function AjoutEquipe() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const formSchema = z.object({
        nom: z.string().min(1, "Nom requis"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const createEquipe = async (data: { nom: string }) => {
        const res = await fetch("https://pokemonapi-production-b931.up.railway.app/equipe/equipe", {
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(data)
        });
    const responseData = await res.json();
    setOpen(!open)
    router.refresh();
}

return (
    <>
        <Button onClick={() => setOpen(!open)} className="border-1 border-black shadow-md hover:bg-gray-100 text-[8px] w-full">
            <p> + Equipe</p>
        </Button>
        {open && (
            <motion.div
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="w-full h-full"
            >
                <div className="absolute mt-2 max-w-70 min-w-56 bg-white border border-black rounded-md shadow-lg px-4 py-2 space-y-2 animate-slide-in h-30 text-[8px] ">
                    <form onSubmit={handleSubmit(createEquipe)} className="flex flex-col items-center justify-between pb-2">
                        <label htmlFor="nom" className="block mt-2">
                            Nom
                        </label>
                        <Input id="nom"  {...register("nom")} />
                        <div className='flex gap-4 pt-2 pb-2'>
                            <Button type="submit" className='bg-yellow-400 hover:bg-yellow-500 text-black text-[8px] '>
                                Créer
                            </Button>
                        </div>
                    </form>

                </div>
            </motion.div>
        )}
    </>

)
}