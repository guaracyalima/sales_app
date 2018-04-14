import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Main from "./components/main";

export default props => (
  <Router>
    <Scene key="login" component={Login} hideNavBar />      
    <Scene key="register" component={Register} hideNavBar />      
    <Scene key="main" component={Main} hideNavBar />      
  </Router>
);