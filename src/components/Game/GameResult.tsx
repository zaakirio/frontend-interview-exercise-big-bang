import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Trophy, Ban } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CHOICES } from '@/constants/gameRules';
import { Choice, GameResult as GameResultType } from '@/types/game';
import { cn } from "@/lib/utils";

interface GameResultProps {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
  resultType: GameResultType;
  playerName: string;
}

export const GameResult: React.FC<GameResultProps> = ({
  userChoice,
  computerChoice,
  result,
  resultType,
  playerName
}) => {
  const resultKey = `${userChoice}-${computerChoice}-${Date.now()}`;
  
  const isWin = resultType === 'win';
  const isLoss = resultType === 'lose';
  const isTie = resultType === 'tie';

  const getResultIcon = () => {
    if (isWin) return Trophy;
    if (isLoss) return Ban;
    return Swords;
  };

  const ResultIcon = getResultIcon();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resultKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Alert className={cn(
          "mb-8",
          isWin && "border-green-500 bg-green-50",
          isLoss && "border-red-500 bg-red-50",
          isTie && "border-yellow-500 bg-yellow-50"
        )}>
          <AlertTitle className="flex items-center gap-2">
            <ResultIcon className={cn(
              "w-5 h-5",
              isWin && "text-green-500",
              isLoss && "text-red-500",
              isTie && "text-yellow-500"
            )} />
            <span>{
              isWin ? "Victory!" :
              isLoss ? "Defeat!" :
              "It's a Tie!"
            }</span>
          </AlertTitle>
          <AlertDescription>
            <motion.div 
              className={cn(
                "text-xl font-semibold mb-4",
                isWin && "text-green-700",
                isLoss && "text-red-700",
                isTie && "text-yellow-700"
              )}
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
                <div className={cn(
                  "flex items-center justify-center gap-2 text-sm font-medium",
                  isWin && "text-green-600",
                  isLoss && "text-red-600"
                )}>
                  <span role="img" aria-label="player">👤</span>
                  {playerName}
                </div>
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
                <ResultIcon className={cn(
                  "w-6 h-6",
                  isWin && "text-green-500",
                  isLoss && "text-red-500",
                  isTie && "text-yellow-500"
                )} aria-hidden="true" />
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
                <div className={cn(
                  "flex items-center justify-center gap-2 text-sm font-medium",
                  isWin && "text-red-600",
                  isLoss && "text-green-600"
                )}>
                  <span role="img" aria-label="computer">💻</span>
                  Computer
                </div>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </motion.div>
    </AnimatePresence>
  );
};