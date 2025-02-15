import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CHOICES } from '@/constants/gameRules';
import { Choice } from '@/types/game';

interface GameResultProps {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
}

export const GameResult: React.FC<GameResultProps> = ({
  userChoice,
  computerChoice,
  result
}) => {
  // Create a unique key for the entire result display
  const resultKey = `${userChoice}-${computerChoice}-${Date.now()}`;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resultKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Alert className="mb-8">
          <AlertTitle>Game Result</AlertTitle>
          <AlertDescription>
            <motion.div 
              className="text-xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {result}
            </motion.div>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <motion.div 
                  className="text-4xl mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 8 }}
                >
                  <span role="img" aria-label={userChoice}>
                    {CHOICES[userChoice.toUpperCase()].icon}
                  </span>
                </motion.div>
                <div className="text-sm">Your Choice</div>
              </div>
              
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: [0, -10, 10, -10, 0]
                }}
                transition={{ 
                  duration: 0.5,
                  times: [0, 0.25, 0.5, 0.75, 1],
                  delay: 0.2
                }}
              >
                <Swords className="w-6 h-6" aria-hidden="true" />
              </motion.div>

              <div className="text-center">
                <motion.div 
                  className="text-4xl mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 8, delay: 0.1 }}
                >
                  <span role="img" aria-label={computerChoice}>
                    {CHOICES[computerChoice.toUpperCase()].icon}
                  </span>
                </motion.div>
                <div className="text-sm">Computer's Choice</div>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </motion.div>
    </AnimatePresence>
  );
};