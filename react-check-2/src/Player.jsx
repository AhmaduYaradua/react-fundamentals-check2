import { Card } from "antd";
import PropTypes from "prop-types";
import { PLAYERSDETAILS } from "./players";

function Player(props) {
  const { Meta } = Card;

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          height: 350,
        }}
        cover={<img className="h-44" alt="example" src={props.playerImage} />}
      >
        <Meta title={props.playerName} description={props.playerNationality} />
        <h1 className="text-blue-600">{props.playerTeam}</h1>
        <h2 className="text-blue-400">{props.playerNumber}</h2>
        <p className="text-blue-200">{props.playerAge}</p>
      </Card>
    </div>
  );
}

Player.propTypes = {
  playerName: PropTypes.string,
  playerNumber: PropTypes.number,
  playerTeam: PropTypes.string,
  playerNationality: PropTypes.string,
  playerAge: PropTypes.number,
  playerImage: PropTypes.string,
};

export default Player;
