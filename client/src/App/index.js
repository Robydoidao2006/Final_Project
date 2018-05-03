import React from 'react';
import {BrowserRouter as Router, Route, } from 'react-router-dom';

//importing login
import withAuthentication from '../components/login/Session/withAuthentication';
import PasswordForgetPage from '../components/login/PasswordForget';
import Navigation from '../components/login/Navigation';
import SignUpPage from '../components/login/SignUp';
import SignInPage from '../components/login/SignIn';
import AccountPage from '../components/login/Account';

//importing routes
import * as routes from '../constants/routes';

//importing pages
import HelpfulLinks from '../pages/HelpfulLinks';
import LandingPage from '../pages/Landing';
import Aboutus from '../pages/Aboutus';
import NoMatch from '../pages/NoMatch';
import HomePage from '../pages/Home';


// import  from '../pages/';
// import  from '../pages/';
// import  from '../pages/';



const App = () =>
  <Router>
    <div className="app">

        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HELPFULLINKS} component={() => <HelpfulLinks />} />
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.ABOUTUS} component={() => <Aboutus />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route component={NoMatch}/>

        {/*  <Route exact path={routes.} component={() => < />} />
        <Route exact path={routes.} component={() => < />} /> */}
       


    </div>
  </Router>

export default withAuthentication(App);