import React from 'react'
import { createRoot } from 'react-dom/client'

import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
}
 from "react-router-dom";
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx';


const App = () => {
  const routes = (
    <Router>
      <Routes>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/log-in' exact element={<Login/>}/>
          <Route path='/sign-up' exact element={<Signup/>}/>
      </Routes>
    </Router>
  )
  return (
    <div className='font-roboto'>
      {routes}
      
    </div>
  )
}

export default App