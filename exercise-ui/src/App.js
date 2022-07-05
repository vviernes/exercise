import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation.js'
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState(); 

  return (
    <div className="App">
      <Router>
        <body>

          <div className="App-header">
            <h1>Online Exercise Tracker</h1>
          </div>

          <Navigation />
          
          <div className="App-main">
            <Route path="/" exact>
              <HomePage setExerciseToEdit={setExerciseToEdit} />
            </Route>
            <Route path="/add-exercise">
              <AddExercisePage />
            </Route>
            <Route path="/edit-exercise">
              <EditExercisePage exerciseToEdit={exerciseToEdit} />
            </Route>
          </div>
          

          <div className="App-footer">
            <p>
              CS 290 - Assignment 6
              <br/>
              Virgilio Viernes
              <br/>
              &copy; March 2022
            </p>
          </div>

        </body>
      </Router>
    </div>
  );
}

export default App;