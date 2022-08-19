import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Private from './components/Private';
import HelloPage from './Pages/hellopage/HelloPage';
import {LoginPage} from './Pages/loginpage/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Private auth='false'/>} >
          <Route path='/home' element={<HelloPage/>}/>
          </Route>
          <Route path='/' element={<LoginPage email='' password=''/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
