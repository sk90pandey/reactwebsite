import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar';
import Footer from './Footer';
//import { Switch, Route, Redirect } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Switch> */}
      <Navbar />
      <Routes>
        {/* <Route path="/home" component={Home} /> */}
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route> 
        <Route path="/contact" element={<Contact />}></Route>
        {/* <Redirect to="/" /> */}
        <Route path="/" element={<Navigate to="Home" />}></Route>
      </Routes>
      {/* </Switch> */}

      <Footer />
    </>
  )
}

export default App;

