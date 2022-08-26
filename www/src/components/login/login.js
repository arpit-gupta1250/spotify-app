import UrlHelper from '../../helpers/urlHelper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const loggedInUserEmail = window.localStorage.getItem("loggedInEmail");

  const navigateToSpotifyLoginPage = () => {
    if (loggedInUserEmail) {
      navigate('/');
      console.log('---------------------------1111')
    } else {
      window.location.href = UrlHelper.getSpotifyAuthorizeUrl();
    }
  }

  return (
    <div>
      <Button 
        sx={{ color: 'white' }}
        onClick={navigateToSpotifyLoginPage}>
        
        Login With Spotify
      </Button>
    </div>
  );
}

export default Login;