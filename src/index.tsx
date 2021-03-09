import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import VaccinationApp from './apps/vaccination/VaccinationApp'
import HomepageApp from './apps/homepage/HomepageApp'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import twitterLogo from './images/Twitter-logo-blue.svg'

ReactDOM.render(
  <Router>

    <Navbar bg='dark' variant='dark' expand='md'>
      <Navbar.Brand>Alex's Crappy Site</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <NavDropdown title='Projects' id='basic-nav-dropdown'>
            <NavDropdown.Item as={Link} to='/vaccine'>Vaccination Progress Tracker</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className='justify-content-end'>
          <a href='https://www.twitter.com/AlexOxford3'>
            <img src={twitterLogo} alt='Twitter' width='30' height='30' className='d-inline-block align-top' />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

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
