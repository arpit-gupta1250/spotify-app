import './homeScreen.css';
import DashboardScreen from '../dashboard/dashboard';
import AuthService from '../../services/authService';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const query = useLocation().search;
  let loggedInUserEmail = window.localStorage.getItem("loggedInEmail");
  
  if (!loggedInUserEmail) {
    const email = new URLSearchParams(query).get("email");
    console.log(email);
    if (email) { 
      dispatch(authActions.login({ isLoggedIn: true }));
      AuthService.setLoggedInUserEmail(window, email);
      loggedInUserEmail = email;
    }
  }

  if (loggedInUserEmail) {
    return (<DashboardScreen></DashboardScreen>);
  } else {
    return (
      <div className="align-div">
        <img src={require("../../assets/spotify.png")} alt="Spotify" className="set-image"/>
      </div>
    );
  }
}

export default HomeScreen;
