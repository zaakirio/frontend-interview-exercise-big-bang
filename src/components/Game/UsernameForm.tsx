import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Player } from '@/types/game';

interface UsernameFormProps {
  onSubmit: (player: Player) => void;
}

export const UsernameForm: React.FC<UsernameFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit({ username: username.trim() });
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome to Rock, Paper, Scissors, Lizard, Spock!</CardTitle>
        <CardDescription>Enter your username to start playing</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
            minLength={2}
            maxLength={20}
            aria-label="Username"
          />
          <Button type="submit" className="w-full">
            Start Playing
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};