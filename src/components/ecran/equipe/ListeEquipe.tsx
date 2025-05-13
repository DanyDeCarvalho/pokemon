import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Castle, Trash } from "lucide-react";
import AjoutEquipe from "./AjoutEquipe";
import Button from "components/Button";
import AjoutPokemon from "./AjoutPokemon";

export default function ListeEquipe({ equipes, pokemonId }: any) {
  return (
    <ScrollArea className="w-full h-full ">
      <div className="p-1 space-y-1 w-full">
        <div className="w-26 text-[8px]">
          <AjoutEquipe />
        </div>
        {equipes.map((equipe: any) => (
          <Accordion key={equipe.id} type="single" collapsible className="w-30">
            <AccordionItem value={equipe.id.toString()} className="border-none w-full">
              <AccordionTrigger className="flex items-center gap-2 px-2 py-1 border rounded-md hover:bg-accent w-full overflow-hidden">
                <div className="flex items-center gap-2 w-full">
                  <Castle className="h-4 w-4 flex-shrink-0" />
                  <p className=" text-[8px]">{equipe.nom}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-2 pt-1 space-y-1">
                  {equipe.equipePokemon.map((pokemon: any) => (
                    <div
                      key={pokemon.id}
                      className="flex items-center justify-between rounded-md border p-1 text-xs hover:bg-accent truncate"
                    >
                     <Trash className="w-5 h-5"/> <p className=" ml-1 truncate w-full overflow-hidden text-ellipsis text-[6px]">{pokemon.pokemon}</p>
                    </div>
                  ))}
{                  console.log('ggjgjhgdddddddddddjj', pokemonId)
}                  <AjoutPokemon equipeId={equipe.id} pokemonId={pokemonId}/>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        ))}
      </div>
    </ScrollArea>
  );
}
