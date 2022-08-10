import "./playlist.css";
import Card from "@mui/material/Card";

function Playlist(props) {
  return (
    <div>
      <Card className="set-card">
        <h3 className="no-margin">{props.heading}</h3>
        <h5 className="no-margin">{props.subHeading}</h5>
      </Card>
    </div>
  );
}

export default Playlist;
