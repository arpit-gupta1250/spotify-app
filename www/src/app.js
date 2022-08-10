import NavBar from './components/navBar/navBar';
import HomeScreen from './screens/home-screen/homeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard/dashboard';
import ContactScreen from './screens/contact-screen/contactScreen';
import PolicyScreen from './screens/policy-screen/policyScreen';
import './app.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className='align-main-section'>
          <Routes>
            <Route exact path="/" element={ <HomeScreen></HomeScreen> } />
            <Route exact path="/authorized" element={ <Dashboard></Dashboard> } />
            <Route exact path="/contact" element={ <ContactScreen></ContactScreen> } />
            <Route exact path="/policy" element={ <PolicyScreen></PolicyScreen> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;