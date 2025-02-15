import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Choice } from '@/types/game';


interface PlayerResultProps {
  name: string;
  choice: Choice;
  icon: string;
  isWinner: boolean;
}

export const PlayerResult: React.FC<PlayerResultProps> = ({
  name,
  choice,
  icon,
  isWinner
}) => {
  return (
    <div className="text-center">
      <motion.div 
        className="text-4xl mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 8 }}
      >
        <span role="img" aria-label={choice}>
          {icon}
        </span>
      </motion.div>
      <div className={cn(
        "flex items-center justify-center gap-2 text-sm font-medium",
        isWinner ? "text-green-600" : "text-red-600"
      )}>
        <span role="img" aria-label={name.toLowerCase()}>
          {name === "Computer" ? "💻" : "👤"}
        </span>
        {name}
      </div>
    </div>
  );
};