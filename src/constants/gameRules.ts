import { GameChoice } from '../types/game';

export const CHOICES: Record<string, GameChoice> = {
  ROCK: {
    name: 'Rock',
    beats: ['Scissors', 'Lizard'],
    icon: '🪨'
  },
  PAPER: {
    name: 'Paper',
    beats: ['Rock', 'Spock'],
    icon: '📄'
  },
  SCISSORS: {
    name: 'Scissors',
    beats: ['Paper', 'Lizard'],
    icon: '✂️'
  },
  LIZARD: {
    name: 'Lizard',
    beats: ['Paper', 'Spock'],
    icon: '🦎'
  },
  SPOCK: {
    name: 'Spock',
    beats: ['Scissors', 'Rock'],
    icon: '🖖'
  }
} as const;

export const WIN_MESSAGES = {
  Scissors: {
    Paper: 'Scissors cuts Paper',
    Lizard: 'Scissors decapitates Lizard'
  },
  Paper: {
    Rock: 'Paper covers Rock',
    Spock: 'Paper disproves Spock'
  },
  Rock: {
    Scissors: 'Rock crushes Scissors',
    Lizard: 'Rock crushes Lizard'
  },
  Lizard: {
    Paper: 'Lizard eats Paper',
    Spock: 'Lizard poisons Spock'
  },
  Spock: {
    Scissors: 'Spock smashes Scissors',
    Rock: 'Spock vaporizes Rock'
  }
} as const;