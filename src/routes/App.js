import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
    </Switch>
  </Router>
);

export default App;