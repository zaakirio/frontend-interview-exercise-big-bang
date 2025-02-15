import { GameOutcome } from '@/types/game';

export const getResultStyles = (resultType: GameOutcome) => {
  const styles = {
    win: {
      alert: "border-green-500 bg-green-50",
      text: "text-green-700",
      icon: "text-green-500",
      winner: "text-green-600",
      loser: "text-red-600",
      title: "Victory!"
    },
    lose: {
      alert: "border-red-500 bg-red-50",
      text: "text-red-700",
      icon: "text-red-500",
      winner: "text-green-600",
      loser: "text-red-600",
      title: "Defeat!"
    },
    tie: {
      alert: "border-yellow-500 bg-yellow-50",
      text: "text-yellow-700",
      icon: "text-yellow-500",
      winner: "text-gray-600",
      loser: "text-gray-600",
      title: "It's a Tie!"
    }
  };

  return styles[resultType];
};