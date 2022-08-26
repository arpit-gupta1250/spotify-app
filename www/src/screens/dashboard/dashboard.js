import { useNavigate } from "react-router-dom";
import './dashboard.css';
import React from "react";
import { useSelector } from "react-redux";
import Loader from '../../components/loader/loader';

const Dashboard = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('----------------isLoggedIn--------------------', isLoggedIn);

  const goToTopPlaylists = () => {
    navigate('/songs/top-playlists');
  };

  const goToNewReleases = () => {
    navigate('/songs/new-releases');
  };

  return (
    <React.Fragment>
      <div className="align-signed-in">
        {/* <h4>Signed In Through : {email}</h4> */}
        <h4>IsLoggedIn : {String(isLoggedIn)}</h4>
      </div>

      {/* <Loader></Loader> */}

      <div className="align-category">
        <div className="align-playlist" onClick={goToTopPlaylists}>
          Top Playlists
        </div>

        <div className="align-playlist" onClick={goToNewReleases}>
          New Releases
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;