import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { PlayerChoice } from './PlayerChoice';
import { GameResult } from './GameResult';
import { GameHistory } from './GameHistory';
import { ScoreBoard } from './ScoreBoard';
import { useGameState } from '@/hooks/useGameState';
import { Player } from '@/types/game';

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
        
        {gameState.result && gameState.resultType && (
          <GameResult
            userChoice={gameState.userChoice!}
            computerChoice={gameState.computerChoice!}
            result={gameState.result}
            resultType={gameState.resultType}
            playerName={player.username}
          />
        )}
        
        {gameHistory.length > 0 && (
          <GameHistory history={gameHistory} />
        )}
      </CardContent>
    </Card>
  );
};