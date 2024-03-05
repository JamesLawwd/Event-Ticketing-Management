import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign up</a>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;