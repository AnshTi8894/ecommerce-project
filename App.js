import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import "./App.css";
import Home from "./home";

import arrow from "./assets/Arrow.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="banner">
        <div className="banner-content">
          <h2 className="banner-title">FIND YOUR DREAM CAR</h2>
          <div className="search">
            <input
              className="field"
              type="text"
              placeholder="Enter car name..."
            />
            <button className="search-btn">Search</button>
          </div>
          {/* <div className="banner-left">
            <img src={arrow} />
          </div> */}
        </div>
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
