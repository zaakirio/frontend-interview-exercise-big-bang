import { useState, useCallback } from 'react';
import { Choice, GameState, GameHistoryEntry } from '../types/game';
import { determineWinner, generateComputerChoice, getResultMessage } from '../utils/gameLogic';
import { useLocalStorage } from './useLocalStorage';

const initialState: GameState = {
  userChoice: null,
  computerChoice: null,
  result: '',
  scores: {
    user: 0,
    computer: 0
  }
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [gameHistory, setGameHistory] = useLocalStorage<GameHistoryEntry[]>('gameHistory', []);

  const playTurn = useCallback((choice: Choice) => {
    const computerChoice = generateComputerChoice();
    const result = determineWinner(choice, computerChoice);
    const resultMessage = getResultMessage(choice, computerChoice, result);

    setGameState(prev => ({
      userChoice: choice,
      computerChoice,
      result: resultMessage,
      scores: {
        user: prev.scores.user + (result === 'win' ? 1 : 0),
        computer: prev.scores.computer + (result === 'lose' ? 1 : 0)
      }
    }));

    setGameHistory(prev => [
      ...prev,
      {
        userChoice: choice,
        computerChoice,
        result,
        timestamp: Date.now()
      }
    ].slice(-5));
  }, [setGameHistory]);

  const resetGame = useCallback(() => {
    setGameState(initialState);
    setGameHistory([]);
  }, [setGameHistory]);

  return {
    gameState,
    gameHistory,
    playTurn,
    resetGame
  };
};

export default useGameState;