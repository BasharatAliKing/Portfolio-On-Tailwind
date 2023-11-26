import React from 'react'
import "./Utilities/App.css";
import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <>
     <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/Home' element={<Home/>}></Route>
            <Route exact path='/Portfolio' element={<Home/>}></Route>
            <Route exact path='/Work' element={<Work/>}></Route>
            <Route exact path='/About' element={<About/>}></Route>
            <Route exact path='/Contact' element={<Contact/>}></Route>
        </Routes>
     </Router>
    </>
  )
}
