import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

import { useGameState } from '@/hooks/useGameState';
import { Player } from '@/types/game';
import { GameHistory } from './GameHistory';
import { GameResult } from './GameResult';
import { PlayerChoice } from './PlayerChoice';
import { ScoreBoard } from './ScoreBoard';

interface GameBoardProps {
  player: Player;
}

export const GameBoard: React.FC<GameBoardProps> = ({ player }) => {
  const { gameState, gameHistory, playTurn, resetGame } = useGameState();

  return (
    <Card className="w-full max-w-4xl">
      <ScoreBoard
        player={player}
        scores={gameState.scores}
        onReset={resetGame}
      />
      
      <CardContent className="space-y-6">
        <PlayerChoice
          currentChoice={gameState.userChoice}
          onChoiceMade={playTurn}
        />
        
        {gameState.result && (
          <GameResult
            userChoice={gameState.userChoice!}
            computerChoice={gameState.computerChoice!}
            result={gameState.result}
          />
        )}
        
        {gameHistory.length > 0 && (
          <GameHistory history={gameHistory} />
        )}
      </CardContent>
    </Card>
  );
};