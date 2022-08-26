import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import './navBar.css';
import Login from '../login/login';
import Button from '@mui/material/Button';
import AuthService from '../../services/authService';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    dispatch(authActions.logout({ isLoggedIn: false }));
    const result = await AuthService.logout(window);
    if (result) goToHomeScreen();
  };

  const goToHomeScreen = () => {
    navigate('/');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense" className='set-nav'>
          <Link to="/" className='no-underline'>
            <Button sx={{ color: 'white'}}>Home</Button>
          </Link>

          <Link to="/contact" className='no-underline'>
            <Button sx={{ color: 'white'}}>Contact</Button>
          </Link>

          <Link to="/policy" className='no-underline'>
            <Button sx={{ color: 'white'}}>Policy</Button>
          </Link>

          <Login></Login>

          <Button sx={{ color: 'white'}} onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;