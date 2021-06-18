import React from 'react';

import GuessActor from './Components/GuessActor/GuessActor';
import Home from './Components/Home/Home';
import GuessMovie from './Components/GuessMovie/GuessMovie';

import { Nav, Navbar } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg">
          <Navbar.Toggle />
          <Navbar.Collapse>
              <Nav className="justify-content-end" style={{ width: "100%"}}>
                <Nav.Link href="/"><h1 style={{ padding: "10px", textAlign: "left"}}>Home</h1></Nav.Link>
                <Nav.Link href="/"><h1 style={{ padding: "10px", textAlign: "left"}}>About</h1></Nav.Link>
                <Nav.Link href="/"><h1 style={{ padding: "10px", textAlign: "left"}}>Contact</h1></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>

      <div style={{paddingLeft: "20px"}}>
        <Router>
            <Switch>
              <Route path="/guessactor">
                <GuessActor />
              </Route>
              <Route path="/guessmovie">
                <GuessMovie />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
      </div>
    </>

    /* <div style={{paddingLeft: "20px"}}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/guessactor">Guess Actor</Link>
              </li>
            </ul>
          </nav>

          { A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. }
          <Switch>
            <Route path="/guessactor">
              <GuessActor />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>*/
  );
}

export default App;