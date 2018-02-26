/**
 * entry
 */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import store from '../store';
import Routes from '../routes';
import NavList from '../containers/navList';
import CommonHeader from '../components/commonHeader';
import CommonFooter from '../components/commonFooter';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <CommonHeader />
        <NavList />
        <Routes />
        <CommonFooter />
      </div>
    </Router>
  </Provider>
);

export default App;
