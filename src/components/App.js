
import './App.css';
import { useState, useEffect }  from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import About from './AboutPage/About';
import Projects from './Projects';

function App() {
  // const [ data, setData ] = useState
  //for project title?
  return (
    <Router>
      <div>
          <NavLink to="/About">About Me Page</NavLink>
          <NavLink to="/">Projects</NavLink>
        </div>
      <Routes>
        <Route path="/" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
