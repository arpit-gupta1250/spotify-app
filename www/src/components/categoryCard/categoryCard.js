import Card from "@mui/material/Card";
import "./categoryCard.css";

const PlaylistCard = (props) => {
  
  return (
    <div className="align-playlist-div">
      <Card className="playlist-card">
        <img
          src={props.playlist.image}
          alt="playlists"
          height={200}
          width={200}
        ></img>
        <div className="align-card-content">
          <h4 className="no-margin align-center">{props.playlist.name}</h4>
          {props.playlist.description && (
            <h5 className="no-margin align-description">
              {props.playlist.description}
            </h5>
          )}
          <h5 className="no-margin align-description">
            No. of Tracks : {props.playlist.totalTracks}
          </h5>
        </div>
      </Card>
    </div>
  );
}

export default PlaylistCard;
