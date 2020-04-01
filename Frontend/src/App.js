import React from 'react';

import {Router} from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';

import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyle/>
        <Routes/>
        <ToastContainer autoClose={3000}/>
      </Router>
      
    </>
  );
}

export default App;
