import UrlHelper from '../../helpers/urlHelper';
import './login.css';
import Button from '@mui/material/Button';

export default function Login() {
  function navigateToSpotifyLoginPage() {
    window.location.href = UrlHelper.getSpotifyAuthorizeUrl();
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