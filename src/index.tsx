import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import VaccinationApp from './apps/vaccination/VaccinationApp'
import HomepageApp from './apps/homepage/HomepageApp'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/vaccine'>
        <VaccinationApp />
      </Route>

      <Route path='/'>
        <HomepageApp />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
)
