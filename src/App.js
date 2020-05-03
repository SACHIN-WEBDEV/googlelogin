import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Components/SignIn";
import Signin2 from "./Components/Signin2";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signin2 />
      </header>
    </div>
  );
}

export default App;
