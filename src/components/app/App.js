import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Row } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom'

import { MainPage } from '../mainPage/MainPage'
import { QuizPage } from '../quizPage/QuizPage'
import { QuizResponse } from '../quizResponse/QuizResponse'
import { BlogPage } from '../blogPage/BlogPage'
import { DashboardPage } from '../dashboardPage/DashboardPage'



function App() {
  return (
    <div className="App">
      <Link className="" to='/'>
        <Row className="justify-content-around">
          <img className="" src='/scotia.svg' alt="Logo"></img>
          <img className="" height="150" width="auto" src='/logo.png' alt="Logo"></img>
        </Row>
      </Link>
      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around bg-transparent w-100">
            <Nav.Link as={Link} to="/quiz">Interactive Quiz</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">My Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
            <Nav.Link href="https://www.scotiaitrade.com/en/direct-investing-and-online-trading.html">iTRADE</Nav.Link>
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
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
