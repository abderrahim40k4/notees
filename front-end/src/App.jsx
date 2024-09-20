import React from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar/Navbar.jsx';

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
import AddNotes from './pages/home/AddNotes.jsx';


const App = () => {
  const routes = (
    <Router>
      <Routes>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/log-in' exact element={<Login/>}/>
          <Route path='/sign-up' exact element={<Signup/>}/>
          <Route path='/add-note' exact element={<AddNotes/>}/>
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