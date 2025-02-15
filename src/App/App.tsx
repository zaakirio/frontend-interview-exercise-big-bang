import { UsernameForm } from "@/components/Form/UsernameForm";
import { GameBoard } from "@/components/Game/GameBoard";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Player } from "@/types/game";


const App: React.FC = () => {
  const [player, setPlayer] = useLocalStorage<Player | null>('player', null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {!player ? (
        <UsernameForm onSubmit={setPlayer} />
      ) : (
        <GameBoard player={player} />
      )}
    </div>
  );
};

export default App;