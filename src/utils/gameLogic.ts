import { Choice, GameOutcome } from '../types/game';
import { CHOICES, WIN_MESSAGES } from '../constants/gameRules';

export const determineWinner = (
  playerChoice: Choice,
  computerChoice: Choice
): GameOutcome => {
  if (playerChoice === computerChoice) return 'tie';
  return CHOICES[playerChoice.toUpperCase()].beats.includes(computerChoice)
    ? 'win'
    : 'lose';
};

export const generateComputerChoice = (): Choice => {
  const choices = Object.values(CHOICES);
  return choices[Math.floor(Math.random() * choices.length)].name;
};

export const getResultMessage = (
  playerChoice: Choice,
  computerChoice: Choice,
  result: GameOutcome
): string => {
  if (result === 'tie') return "Nobody wins";
  
  if (result === 'win') {
    return WIN_MESSAGES[playerChoice][computerChoice as keyof typeof WIN_MESSAGES[Choice]];
  }
  
  return WIN_MESSAGES[computerChoice][playerChoice as keyof typeof WIN_MESSAGES[Choice]];
};

export const formatTimestamp = (timestamp: number): string => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(timestamp);
};