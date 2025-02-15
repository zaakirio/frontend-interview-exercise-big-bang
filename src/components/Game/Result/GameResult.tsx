import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CHOICES, RESULT_MESSAGES } from '@/constants/gameRules';
import { cn } from "@/lib/utils";
import { Choice, GameOutcome } from '@/types/game';
import { PlayerResult } from './PlayerResult';
import { getResultStyles } from './Result.Styles';
import { ResultIcon } from './ResultIcon';

interface GameResultDisplayProps {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
  resultType: GameOutcome;
  playerName: string;
}

const getResultMessage = (resultType: GameOutcome): string => {
  return RESULT_MESSAGES[resultType];
};

export const GameResult: React.FC<GameResultDisplayProps> = ({
  userChoice,
  computerChoice,
  result,
  resultType,
  playerName
}) => {

  const resultKey = `${userChoice}-${computerChoice}-${Date.now()}`;
  const styles = getResultStyles(resultType);
  const isWin = resultType === 'win';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={resultKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Alert className={cn("mb-8", styles.alert)}>
          <AlertDescription>
            <div className="flex flex-col items-center justify-center mb-6">
              <motion.div
                className="flex items-center justify-center gap-3 mb-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8 }}
              >
                <span className={cn(
                  "text-4xl font-bold",
                  styles.text
                )}>
                  {getResultMessage(resultType)}
                </span>
              </motion.div>
              <motion.div
                className={cn(
                  "text-lg text-center",
                  styles.text
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {result}
              </motion.div>
            </div>

            <div className="flex justify-center items-center space-x-8">
              <PlayerResult
                name={playerName}
                choice={userChoice}
                icon={CHOICES[userChoice.toUpperCase()].icon}
                isWinner={isWin}
              />

              <ResultIcon resultType={resultType} />

              <PlayerResult
                name="Computer"
                choice={computerChoice}
                icon={CHOICES[computerChoice.toUpperCase()].icon}
                isWinner={!isWin && resultType !== 'tie'}
              />
            </div>
          </AlertDescription>
        </Alert>
      </motion.div>
    </AnimatePresence>
  );
};