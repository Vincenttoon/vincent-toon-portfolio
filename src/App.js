import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import FooterComponent from "./components/Footer";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Technologies from "./pages/Technologies";
import Resume from "./pages/Resume";
import Contact from './pages/Contact';
import Featured from './components/Featured_Projects';
import Personal from "./components/Personal_Projects";
import Challenges from './components/WashU_Projects';
import Async from './components/WashU_Async';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/technologies" element={<Technologies />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/featured" element={<Featured />}/>
            <Route path="/personal-projects" element={<Personal/>}/>
            <Route path="/challenges" element={<Challenges/>}/>
            <Route path="/async" element={<Async/>}/>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
      
    </div>
  );
}

export default App;
