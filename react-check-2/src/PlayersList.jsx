import Player from "./Player";
import { PLAYERSDETAILS } from "./players";

function PlayerList() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl underline mb-12 italic font-bold">My Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4 gap-4">
        {PLAYERSDETAILS.map((item) => {
          return (
            <Player
              key={item.id}
              playerName={item.name}
              playerImage={item.photo}
              playerNationality={item.nationality}
              playerTeam={item.team}
              playerNumber={item.jerseyNumber}
              playerAge={item.age}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PlayerList;
