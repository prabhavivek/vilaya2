import { Fragment } from 'react';
import './App.css';
import React, { useState, useContext, useEffect, createContext } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import SignInPage from './pages/signInPage/SignInPage';
import SignUpPage from './pages/signUpPage/SignUpPage';
import SetPassword from './pages/setPassword/SetPassword';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

const AuthApi = createContext();

const ProtectedRoutes = ({ auth, component: Component }) => {
  return (<Route render={() => auth ? (<Component />) : (<Redirect to='/' />)} />)
}

const ProtectedLogin = ({ auth, component: Component }) => {
  return (<Route render={() => !auth ? (<Component />) : (<Redirect to='/home' />)} />)
}

export default function App() {
  const [auth, setAuth] = useState(false)

  const readCookie = () => {
    const user = Cookies.get("user-details")
    if (user) { setAuth(true) }
  }
  useEffect(() => {
    readCookie();
  }, [])

  return (
    <Fragment >
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router >
          <Routes />
        </Router>
      </AuthApi.Provider>
    </Fragment>
  );
}

const Routes = () => {
  const Auth = useContext(AuthApi)
  return (
    <Switch>
      <ProtectedLogin path="/" exact component={SignInPage} auth={Auth.auth} />
      <ProtectedLogin path="/signUp"  component={SignUpPage} auth={Auth.auth} />
      <ProtectedLogin path="/setPassword"  component={SetPassword} auth={Auth.auth} />
      <ProtectedLogin path="/forgotPassword"  component={ForgotPassword} auth={Auth.auth} />

      {/*<Route path="/verifyOtp" render={(props) => <Otp  {...props} />} />*/}
      {/*<ProtectedRoutes path="/home" component={GameJourney} auth={Auth.auth} />*/}
    </Switch>

  )
}