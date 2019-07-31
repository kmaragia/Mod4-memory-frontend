import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Login from './Login'
import CardsContainer from './CardsContainer'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {


   render(){
     return (
          <div className="App">
            <div>
              <nav>
                <Navbar/>
              </nav>
              <Router>
                  <React.Fragment>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/homepage" component={HomePage}/>
                    <Route exact path="/game" component={CardsContainer}/>
                  </React.Fragment>
              </Router>
            </div>
          </div>
        );}
}


// <div>
//   <nav>
//     <Navbar/>
//   </nav>
// </div>
// <Login />
// <CardsContainer />

export default App;
