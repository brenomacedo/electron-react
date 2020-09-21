import React from 'react';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
import Screen from './screens/Screen'

function App() {
  return (
    
     <HashRouter basename="/React">
        <Route component={Home} path='home' />
        <Route component={Screen} path='screen' />
     </HashRouter>
    
  );
}

export default App;
