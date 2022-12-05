import React, { useState } from "react";
import initialField from "./config";
import "./App.css";

function Home() {
  const [data, setData] = useState(initialField);
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="cars-container">
      <div className="title">
        <h1>Featured Cars</h1>
      </div>
      <div className="cars-btn">
        <div className="Btn-bg">
          <button
            onClick={() => {
              setShowFirst(!showFirst);
              setShowSecond(false);
              setShowThird(false);
              setShowAll(false);
            }}
          >
            Popular
          </button>
          <button
            onClick={() => {
              setShowFirst(false);
              setShowSecond(!showSecond);
              setShowThird(false);
              setShowAll(false);
            }}
          >
            Just launched
          </button>
          <button
            onClick={() => {
              setShowFirst(false);
              setShowSecond(false);
              setShowThird(!showThird);
              setShowAll(false);
            }}
          >
            Upcoming
          </button>
        </div>
        <button
          className="all"
          onClick={() => {
            setShowAll(!showAll);
            setShowFirst(false);
            setShowSecond(false);
            setShowThird(false);
          }}
        >
          Show All
        </button>
        <div className="cart-rows">
          {showFirst &&
            data
              .filter((element) => element.type === "sedan")
              .map((ele) => (
                <div className="cart-container" key={ele.id}>
                  <img alt="error" src={ele.image} />
                  <div className="namp">
                    <h3>{ele.name}</h3>
                    <p>{ele.price}</p>
                  </div>
                </div>
              ))}
          {showSecond &&
            data
              .filter((element) => element.type === "hatchback")
              .map((ele) => (
                <div className="cart-container" key={ele.id}>
                  <img alt="error" src={ele.image} />
                  <div className="namp">
                    <h3>{ele.name}</h3>
                    <p>{ele.price}</p>
                  </div>
                </div>
              ))}
          {showThird &&
            data
              .filter((element) => element.type === "SUV")
              .map((ele) => (
                <div className="cart-container" key={ele.id}>
                  <img alt="error" src={ele.image} />
                  <div className="namp">
                    <h3>{ele.name}</h3>
                    <p>{ele.price}</p>
                  </div>
                </div>
              ))}
          {showAll &&
            data.map((ele) => (
              <div className="cart-container" key={ele.id}>
                <img alt="error" src={ele.image} />
                <div className="namp">
                  <h3>{ele.name}</h3>
                  <p>{ele.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
