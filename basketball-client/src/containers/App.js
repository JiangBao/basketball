/**
 * entry
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from '../routes';
import NavList from '../containers/navList';
import CommonHeader from '../components/commonHeader';
import CommonFooter from '../components/commonFooter';

const App = () => (
  <Router>
    <div className="App">
      <CommonHeader />
      <NavList />
      <Routes />
      <CommonFooter />
    </div>
  </Router>
);

export default App;
