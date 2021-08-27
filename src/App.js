import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

import Login from "./Login"
import Tellme from "./Login"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Graph from "./Graph"
import Logout from "./Logout"

import { AuthProvider } from "./AuthContext"


// Import pages

import Dashboard from './pages/Dashboard';
import Perguntas from './pages/Perguntas';
import Perguntas01 from './pages/Perguntas01';
import Perguntas02 from './pages/Perguntas02';
import Perguntas03 from './pages/Perguntas03';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <Router>
          <AuthProvider>
      <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/perguntas" component={Perguntas} />
        <PrivateRoute path="/perguntas01" component={Perguntas01} />
        <PrivateRoute path="/perguntas02" component={Perguntas02} />
        <PrivateRoute path="/perguntas03" component={Perguntas03} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/tellme" component={Tellme} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/graphics" component={Graph}/>
              <Route path="/logout" component={Logout}/>
      </Switch>
      </AuthProvider>
      </Router>
    </>
  );
}

export default App;
