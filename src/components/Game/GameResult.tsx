import React from 'react';
import { Swords } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CHOICES } from '@/constants/gameRules';
import { Choice } from '@/types/game';

interface GameResultProps {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
}

export const GameResult: React.FC<GameResultProps> = ({
  userChoice,
  computerChoice,
  result
}) => {
  return (
    <Alert>
      <AlertTitle>Game Result</AlertTitle>
      <AlertDescription>
        <div className="text-xl font-semibold mb-4">{result}</div>
        <div className="flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="text-4xl mb-2" role="img" aria-label={userChoice}>
              {CHOICES[userChoice.toUpperCase()].icon}
            </div>
            <div className="text-sm">Your Choice</div>
          </div>
          <Swords className="w-6 h-6" aria-hidden="true" />
          <div className="text-center">
            <div className="text-4xl mb-2" role="img" aria-label={computerChoice}>
              {CHOICES[computerChoice.toUpperCase()].icon}
            </div>
            <div className="text-sm">Computer's Choice</div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
};