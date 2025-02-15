import React from 'react';
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
          {history.map((game, index) => (
            <div
              key={game.timestamp}
              className="flex justify-between items-center p-2 bg-secondary rounded"
            >
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  {formatTimestamp(game.timestamp)}
                </span>
                <span>
                  <span role="img" aria-label={game.userChoice}>
                    {CHOICES[game.userChoice.toUpperCase()].icon}
                  </span>
                  {' vs '}
                  <span role="img" aria-label={game.computerChoice}>
                    {CHOICES[game.computerChoice.toUpperCase()].icon}
                  </span>
                </span>
              </div>
              <Badge variant={getResultVariant(game.result)}>
                {getResultText(game.result)}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};