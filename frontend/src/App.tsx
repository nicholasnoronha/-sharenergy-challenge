import React from "react";
import Router from "./routes";
import image from "./assets/background.png";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="first-layer" />
      <img src={image} className="second-layer" />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
