import React from 'react';
import './App.css';
import Header from './components/Header';
import Dropdown from './components/Dropdown';

function App() {
  const author = 'Nina';
  const dropdown = {
    title: 'Favourite Artists', 
    options: [
      'album 1: The Chicks', 
      'album 2: David Gray', 
      'album 3: Arctic Monkeys',
      'album 4: Paolo Nutini', 
      'album 5: Ben Howard'
    ]
  }

  return (
    <div className="App">
    <Header name={author} />
    <Dropdown title={dropdown.title} options={dropdown.options} />
    </div>
    );
  };

export default App;
