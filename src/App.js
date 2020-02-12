import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import CarbonLab from './carbon/CarbonLab';
import EvergreenLab from './evergreen/EvergreenLab';
import GrommetLab from './grommet/GrommetLab';
import ReactstrapLab from './reactstrap/ReactstrapLab';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', flexDirection: 'row' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/carbon">Carbon</Link>
            </li>
            <li>
              <Link to="/evergreen">Evergreen</Link>
            </li>
            <li>
              <Link to="/grommet">Grommet</Link>
            </li>
            <li>
              <Link to="/reactstrap">Reactstrap</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/carbon">
            <CarbonLab />
          </Route>
          <Route path="/evergreen">
            <EvergreenLab />
          </Route>
          <Route path="/grommet">
            <GrommetLab />
          </Route>
          <Route path="/reactstrap">
            <ReactstrapLab />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
