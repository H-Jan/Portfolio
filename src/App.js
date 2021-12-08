import logo from './logo.svg';
import './App.css';
import { useState, useEffect }  from 'react';
import data from './data.json';
import title from './Title.js';

function App() {
  // const [ data, setData ] = useState
  return (
    <div className="App">
      <h1> {data.title} </h1>
      <p> {data.body} </p>
      {data.projects.map(project => (
        <div> 
          <h2> {project.title} </h2>
          <p> {project.body} </p>
        </div>      
        ))}
    </div>
  );
}

export default App;
