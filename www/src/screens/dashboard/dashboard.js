import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import './dashboard.css';
import Card from '@mui/material/Card';
import Playlist from "../../components/playlist/playlist";

function Dashboard() {
  const [newReleases, setNewReleases] = useState({ albums: "" });
  const [isNewReleasesLoaded, setIsNewReleasesLoaded] = useState(false);

  const query = useLocation().search;
  const email = getUserEmail(query);

  useEffect(() => {
    getNewReleases(email)
      .then(response => {
        setIsNewReleasesLoaded(true);
        setNewReleases(response);
        console.log('--------------', newReleases);
      })
      .catch(error => console.log(error))
  }, [isNewReleasesLoaded]);

  return (
    <div>
      <div className="align-signed-in">
        <h4>Signed In Through : {email}</h4>
      </div>

      <div className="align-playlist">
        <Playlist heading={'Top 20 Weekly'}></Playlist>
        <Playlist heading={'Top 100 Monthly'}></Playlist>
      </div>

      {/* <div className="align-playlist">
        <Playlist heading={'Top 20 Weekly'}></Playlist>
        <Playlist heading={'Top 100 Monthly'}></Playlist>
      </div> */}

      { newReleases.playlists &&
        <div>
          <div style={{width: 'fit-content'}}>
            <img 
              src={ newReleases.playlists.items[0].images[0].url } 
              alt="playlist" 
              height={200} 
              width={200}
            ></img>
            <p style={{'margin': '0px', 'textAlign': 'center'}}>{ newReleases.playlists.items[0].name }</p>
          </div>
        </div>
      }
    </div>
  );
}

function getUserEmail(query) {
  return new URLSearchParams(query).get("email");
}

async function getNewReleases(email) {
  const response = await axios.get(`http://localhost:5000/songs/new-releases?email=${email}`);
  return response.data;
}

export default Dashboard;
