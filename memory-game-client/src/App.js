import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Login from './Login'
import CardsContainer from './CardsContainer'

function App() {



  return (
    <div className="App">
      <div>
        <nav>
          <Navbar/>
        </nav>
      </div>
      <Login />
      <CardsContainer />
    </div>
  );
}

export default App;
