import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/">
        <App />
      </Route>

      <Route path="/vaccine">
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
