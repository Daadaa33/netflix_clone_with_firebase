import React from "react";
import { Route,Routes ,BrowserRouter ,Router } from "react-router-dom";
import Home from './Pages/Home'
import List from './Pages/List'
import Login from './Pages/Login'

import Browse from "./Pages/Browse";
import SingUp from "./Pages/SingUp";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/browse" element={<Browse />}/>
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="SingUp" element={<SingUp />} />
      </Routes>
      </BrowserRouter>
   
  )
}

export default App
