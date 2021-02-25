import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import VaccinationApp from './apps/vaccination/VaccinationApp';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/vaccine">
        <VaccinationApp />
      </Route>

      <Route path="/">
        <VaccinationApp />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
