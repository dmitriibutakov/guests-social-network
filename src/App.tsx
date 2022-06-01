import React from "react";
import "./App.css";
import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Right from "./components/Right/Right";

const App = () => {
  return (
    <div className="App">
      <Left/>
      <Center/>
      <Right/>
    </div>
  );
}

export default App;
