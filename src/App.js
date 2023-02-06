import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import FooterComponent from "./components/Footer";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Technologies from "./pages/Technologies";
import Resume from "./pages/Resume";

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
          </Routes>
        </div>
        <FooterComponent />
      </Router>
      
    </div>
  );
}

export default App;
