import NavBar from './components/navBar/navBar';
import HomeScreen from './screens/home-screen/homeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard/dashboard';
import ContactScreen from './screens/contact-screen/contactScreen';
import PolicyScreen from './screens/policy-screen/policyScreen';
import SongsCategory from './components/songsCategory/songsCategory';
import './app.css';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className='align-main-section'>
          <Routes>
            <Route exact path="/" element={ <HomeScreen></HomeScreen> } />
            <Route exact path="/dashboard" element={ <Dashboard></Dashboard> } />
            <Route exact path="/contact" element={ <ContactScreen></ContactScreen> } />
            <Route exact path="/policy" element={ <PolicyScreen></PolicyScreen> } />
            <Route exact path="/songs/:category" element={ <SongsCategory></SongsCategory> } />
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;