export type Choice = 'Rock' | 'Paper' | 'Scissors' | 'Lizard' | 'Spock';
export type GameOutcome = 'win' | 'lose' | 'tie';

export interface GameChoice {
  name: Choice;
  beats: Choice[];
  icon: string;
};

export interface GameState {
  userChoice: Choice | null;
  computerChoice: Choice | null;
  result: string;
  resultType: GameOutcome | null;
  scores: {
    user: number;
    computer: number;
  };
};

export interface GameHistoryEntry {
  userChoice: Choice;
  computerChoice: Choice;
  result: GameOutcome;
  timestamp: number;
};

export interface Player {
  username: string;
  avatar?: string;
};

export interface ResultStyleProps {
  resultType: GameOutcome;
}




