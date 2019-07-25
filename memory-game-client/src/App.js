import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Login from './Login'


function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <Navbar/>
        </nav>
      </div>
      < Login />
    </div>
  );
}

export default App;
