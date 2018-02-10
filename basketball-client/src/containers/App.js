/**
 * entry
 */
import React from 'react';
import './App.css';
import NavList from '../containers/navList';
import CommonHeader from '../components/commonHeader';
import CommonFooter from '../components/commonFooter';

const App = () => (
  <div className="App">
    <CommonHeader />
    <NavList />
    <CommonFooter />
  </div>
);

export default App;
