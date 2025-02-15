import React, { useState } from 'react';
import { Trophy, RefreshCw } from 'lucide-react';
import { CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Player } from '@/types/game';
import { ResetDialog } from '../ResetDialog/ResetDialog';

interface ScoreBoardProps {
  player: Player;
  scores: {
    user: number;
    computer: number;
  };
  onReset: () => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  player,
  scores,
  onReset
}) => {
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);

  const handleReset = () => {
    setShowResetConfirmation(false);
    onReset();
  };

  return (
    <>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarFallback>
                {player.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold">{player.username}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Trophy className="w-6 h-6 text-yellow-500" aria-hidden="true" />
            <span className="font-bold" role="status" aria-label={`Score: ${scores.user} to ${scores.computer}`}>
              {scores.user} - {scores.computer}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowResetConfirmation(true)}
              aria-label="Reset Game"
            >
              <RefreshCw className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <ResetDialog
        open={showResetConfirmation}
        onOpenChange={setShowResetConfirmation}
        onConfirm={handleReset}
      />
    </>
  );
};