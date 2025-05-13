"use client";

import AuthForm from "components/ecran/AuthForm";
import Pokedex from "components/Pokedex";
import { motion } from "framer-motion";

const transitionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default  function Inscription() {
  return (
    <Pokedex>
      <motion.div
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        <AuthForm isConnexion={false} />
      </motion.div>
    </Pokedex>
  );
}
