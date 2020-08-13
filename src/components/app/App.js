import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'
import scotia from './scotia.svg'

import { MainPage } from '../mainPage/MainPage'
import { QuizPage } from '../quizPage/QuizPage'
import { QuizResponse } from '../quizResponse/QuizResponse'



function App() {
  return (
    <div className="App">
      <Link to='/'><img className="d-flex" src={scotia} alt="Logo"></img></Link>
      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around bg-transparent w-100">
            <Nav.Link as={Link} to="/">Interactive Quiz</Nav.Link>
            <Nav.Link as={Link} to="/quiz">My Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Expert Blogs</Nav.Link>
            <Nav.Link href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading.html">iTRADE</Nav.Link>
            <Nav.Link as={Link} to="/quiz">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/other">
          <QuizResponse />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
