export type Choice = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock';

export interface GameChoice {
  name: Choice;
  beats: Choice[];
  icon: string;
};

export type GameResult = 'win' | 'lose' | 'tie';

export interface GameState {
  userChoice: Choice | null;
  computerChoice: Choice | null;
  result: string;
  resultType: GameResult | null;
  scores: {
    user: number;
    computer: number;
  };
};

export interface GameHistoryEntry {
  userChoice: Choice;
  computerChoice: Choice;
  result: GameResult;
  timestamp: number;
};

export interface Player {
  username: string;
  avatar?: string;
};