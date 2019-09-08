import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App;
