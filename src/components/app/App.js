import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { MainPage } from '../mainPage/MainPage'
import { QuizPage } from '../quizPage/QuizPage'
import HomeButton from './Test.js'


function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/MainPage">Main Page</Link>
          </li>
          <li>
            <Link to="/QuizPage">Main Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/MainPage">
            <MainPage/>
          </Route>
          <Route path="/QuizPage">
            <QuizPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
