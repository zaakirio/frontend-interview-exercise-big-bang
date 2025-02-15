import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CHOICES } from '@/constants/gameRules';
import { Choice } from '@/types/game';

interface PlayerChoiceProps {
  currentChoice: Choice | null;
  onChoiceMade: (choice: Choice) => void;
}

export const PlayerChoice: React.FC<PlayerChoiceProps> = ({
  currentChoice,
  onChoiceMade
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Object.values(CHOICES).map(({ name, icon }) => (
        <AnimatePresence mode="wait" key={name}>
          <Button
            onClick={() => onChoiceMade(name)}
            variant={currentChoice === name ? "default" : "outline"}
            className="h-24 w-full flex flex-col items-center justify-center transition-colors relative"
            aria-label={`Choose ${name}`}
            aria-pressed={currentChoice === name}
          >
            <motion.span 
              className="text-2xl mb-2" 
              role="img" 
              aria-label={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={currentChoice === name ? {
                scale: [1, 1.2, 1],
                transition: {
                  duration: 0.3
                }
              } : {}}
            >
              {icon}
            </motion.span>
            <span className="text-sm">{name}</span>
            {currentChoice === name && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute inset-0 bg-primary/10 rounded-md"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </Button>
        </AnimatePresence>
      ))}
    </div>
  );
};