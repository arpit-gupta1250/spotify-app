import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import './navBar.css';
import Login from '../login/login';
import Button from '@mui/material/Button';

function NavBar() {
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
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;