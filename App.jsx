import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Guvi from './Guvi';
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/guvi/All">GUVI</Link>
                </li>
                <li>
                  <Link to="/guvi/fullstack">FullStack</Link>
                </li>
                <li>
                  <Link to ="/guvi/DataScience">DataScience</Link>
                </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/guvi/:GuviItems" Component={Guvi}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
