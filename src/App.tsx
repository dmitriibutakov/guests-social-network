import React from "react";
import "./App.css";
import Left from "./Components/Left/Left";
import Center from "./Components/Center/Center";
import Right from "./Components/Right/Right";

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
