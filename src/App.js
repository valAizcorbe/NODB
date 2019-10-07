import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import router from "./router";

function App() {
  return (
    <div>
      <HashRouter>
        <header>
          <NavBar />
          {router}
        </header>
      </HashRouter>
    </div>
  );
}

export default App;
