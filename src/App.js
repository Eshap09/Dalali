
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">Contact</Link>
                </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <Contact />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home/>
              </Route>
             
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
