
import './App.css';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import About from './AboutPage/About';
import Projects from './Projects';
import Contact from './ContactPage/Contact';

function App() {
  // const [ data, setData ] = useState
  //for project title?
  return (
    <div className="John"> 
    <Router>
      <div className="Header">
          <div>
          <NavLink to="/About"> About Me Page </NavLink>
          <NavLink to="/"> Projects </NavLink>
          <NavLink to="/Contact"> Contact </NavLink>
          </div>
      </div>
      <Routes>
        <Route path="/" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
