import React from 'react';
import { HashRouter, Route, BrowserRouter, Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Screen from './screens/Screen'

function App() {
  return (
    
     <HashRouter basename="/React">
         <Route component={Home} exact path='/' />
         <Route component={Screen} exact path='/screen' />
     </HashRouter>
    
  );
}

export default App;
