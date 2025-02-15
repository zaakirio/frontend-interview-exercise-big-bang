import React from 'react';
import { Button } from "@/components/ui/button";
import { CHOICES } from '@/constants/gameRules';
import { Choice } from '@/types/game';

interface PlayerChoiceProps {
  currentChoice: Choice | null;
  onChoiceMade: (choice: Choice) => void;
}

export const PlayerChoice: React.FC<PlayerChoiceProps> = ({
  currentChoice,
  onChoiceMade
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Object.values(CHOICES).map(({ name, icon }) => (
        <Button
          key={name}
          onClick={() => onChoiceMade(name)}
          variant={currentChoice === name ? "default" : "outline"}
          className="h-24 flex flex-col items-center justify-center"
          aria-label={`Choose ${name}`}
          aria-pressed={currentChoice === name}
        >
          <span className="text-2xl mb-2" role="img" aria-label={name}>
            {icon}
          </span>
          <span className="text-sm">{name}</span>
        </Button>
      ))}
    </div>
  );
};