'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Button from 'components/Button';
import { motion } from "framer-motion";
const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export default function Notification() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await fetch("https://pokemonapi-production-b931.up.railway.app/amis/demandeAmis", {
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
      }
      });
    const data = await res.json();
    setNotifications(data);
  } catch (error) {
    console.error('Erreur lors de la récupération des notifications:', error);
    setNotifications([]);
  }
};

useEffect(() => {
  fetchNotifications();
}, []);

const reponseDemandeAmis = async (id: string, statut: "ACCEPTE" | "REFUSE") => {
  try {
    const res = await fetch("https://pokemonapi-production-b931.up.railway.app/amis/reponseDemande", {
        method: "POST",
      credentials: 'include',
      headers: {
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        demandeAmisId: id,
        statut,
      }),
      });

  await res.json();
  await fetchNotifications();
} catch (err) {
  console.error("Erreur en répondant à la demande :", err);
}
  };
return (
  <div className="absolute top-3 right-3 z-50" ref={dropdownRef}>
    <Button
      onClick={() => setOpen(!open)}
      className={`border-2 border-black p-2 shadow-md hover:bg-gray-100 transition-colors duration-300 ${notifications.length > 0 ? 'glow-pulse' : 'bg-white'
        }`}

    >
      <Bell className="w-5 h-5 text-black" />
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
        <div className="absolute right-0 mt-2 max-w-70 min-w-56 bg-white border border-black rounded-md shadow-lg px-4 py-2 space-y-2 animate-slide-in overflow-auto h-30 text-[8px] ">
          {notifications.length > 0 ? notifications.map((notification: any) => (
            <div key={notification.id} className="flex flex-col items-center justify-between border-b-2 pb-2">
              <span>Demande d'amis de : {notification.demandeur.username}</span>
              <div className='flex gap-4 pt-2 pb-2'>
                <Button onClick={() => reponseDemandeAmis(notification.id, "ACCEPTE")} className='bg-yellow-400 hover:bg-yellow-500 text-black text-[8px] '>
                  Accepter
                </Button>
                <Button onClick={() => reponseDemandeAmis(notification.id, "REFUSE")} className='bg-red-500 hover:bg-red-600 text-white text-[8px]'>
                  Refuser
                </Button>
              </div>
            </div>
          )) : <span>Rien a voir.</span>}
        </div>
      </motion.div>
    )}
  </div>
);
}
