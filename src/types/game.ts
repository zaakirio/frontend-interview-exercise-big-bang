export type Choice = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock';

export type GameChoice = {
  name: Choice;
  beats: Choice[];
  icon: string;
};

export type GameResult = 'win' | 'lose' | 'tie';

export type GameState = {
  userChoice: Choice | null;
  computerChoice: Choice | null;
  result: string;
  scores: {
    user: number;
    computer: number;
  };
};

export type GameHistoryEntry = {
  userChoice: Choice;
  computerChoice: Choice;
  result: GameResult;
  timestamp: number;
};

export type Player = {
  username: string;
  avatar?: string;
};