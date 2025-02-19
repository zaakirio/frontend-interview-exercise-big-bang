import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CHOICES } from '@/constants/gameRules';
import { GameHistoryEntry } from '@/types/game';
import { formatTimestamp } from '@/utils/gameLogic';

interface GameHistoryProps {
  history: GameHistoryEntry[];
}

export const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  const getResultVariant = (result: GameHistoryEntry['result']) => {
    switch (result) {
      case 'win':
        return 'success';
      case 'lose':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getResultText = (result: GameHistoryEntry['result']) => {
    switch (result) {
      case 'win':
        return 'Victory!';
      case 'lose':
        return 'Defeat';
      default:
        return 'Tie';
    }
  };

  return (
    <div className="space-y-4">
      <Separator />
      <div>
        <h3 className="text-lg font-semibold mb-2">Game History</h3>
        <div className="space-y-2">
          <AnimatePresence initial={false}>
            {history.map((game) => (
              <motion.div
                key={game.timestamp}
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto',
                  transition: {
                    height: {
                      duration: 0.3
                    }
                  }
                }}
                exit={{ 
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      duration: 0.3
                    }
                  }
                }}
                className="overflow-hidden"
              >
                <div className="flex justify-between items-center p-2 bg-secondary rounded">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {formatTimestamp(game.timestamp)}
                    </span>
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span role="img" aria-label={game.userChoice}>
                        {CHOICES[game.userChoice.toUpperCase()].icon}
                      </span>
                      <span>vs</span>
                      <span role="img" aria-label={game.computerChoice}>
                        {CHOICES[game.computerChoice.toUpperCase()].icon}
                      </span>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge variant={getResultVariant(game.result)}>
                      {getResultText(game.result)}
                    </Badge>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};