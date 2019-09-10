import React from 'react';
import { BrowserRouter as Router , Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles/:username" component={Profile} />
      </div>
    </Router>
  )
}

export default App;
