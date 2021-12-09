import React from 'react';
import './Title.css';
import { Navlink, NavLink } from 'react-router-dom'
import Projects from '../Projects';

function Title() {
    return (
        <div className="Computer Programming Portfolio">
          <header>
            <h1>Hani Jandali - Data Scientist</h1>
            <div className="Title-Subtitle"> A portfolio page dedicated to the work and resume of a datas cientist </div>
            <div>
            <NavLink 
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
              to="/">Projects</NavLink>
            <NavLink 
              className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
              to="/about">About</NavLink>
            <Projects />
            </div>
    
          </header>
        </div>
      )
}

export default Title