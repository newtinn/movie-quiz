import React from 'react';

import GuessActor from './Components/GuessActor/GuessActor';
import Home from './Components/Home/Home';
import GuessMovie from './Components/GuessMovie/GuessMovie';
import SixDegrees from './Components/SixDegrees/sixdegrees';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import { Nav, Navbar } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let controller = new AbortController();

  function endFetch() {
    controller.abort();
    controller = new AbortController();
  }

  /*function resetController() {
    controller = new AbortController();
    console.log("reset controller");
  }*/

  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg">
          <Navbar.Toggle />
          <Navbar.Collapse>
              <Nav className="justify-content-end" style={{ width: "100%"}}>
                <Nav.Link href="/" onClick={()=>{endFetch();}} ><h1 style={{ padding: "10px", textAlign: "left"}}>Home</h1></Nav.Link>
                <Nav.Link href="/about" onClick={()=>{endFetch();}}><h1 style={{ padding: "10px", textAlign: "left"}}>About</h1></Nav.Link>
                <Nav.Link href="/contact" onClick={()=>{endFetch();}}><h1 style={{ padding: "10px", textAlign: "left"}}>Contact</h1></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>

      <div style={{paddingLeft: "20px"}}>
        <Router>
            <Switch>
              <Route path="/guessactor" exact>
                <GuessActor controller={controller}/>
              </Route>
              <Route path="/guessmovie" exact>
                <GuessMovie controller={controller}/>
              </Route>
              <Route path="/sixdegrees" exact>
                <SixDegrees controller={controller}/>
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="*">
                <>
                  <h1 style={{ fontSize: "72px"}}>Page not found</h1>
                  <p>Sorry this page could not be found, please use the navigation at the top to locate to a page that exists.</p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </>
              </Route>
            </Switch>
        </Router>
      </div>
      <footer style={{paddingTop: "200px", paddingBottom: "50px"}}>
        BigFatFilmQuiz is made by Newtinn, © 2021
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style={{"border-width": "0"}} src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
      </footer>
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