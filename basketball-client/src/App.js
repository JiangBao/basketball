/**
 * entry
 */
import React from 'react';
import './App.css';
import CommonHeader from './components/commonHeader';
import CommonFooter from './components/commonFooter';

const App = () => (
  <div className="App">
    <CommonHeader />
    <p>test</p>
    <CommonFooter />
  </div>
);

export default App;
