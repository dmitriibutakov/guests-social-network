import React from 'react';
import './App.css';
import Left from "./components/Left/Left";
import Center from "./components/Center/Center";
import Right from "./components/Right/Right";
import {DispatchType, StateType} from "./Redux/redux-store";

type StateTypeProps = {
  state: StateType
  dispatch: DispatchType
}
const App:React.FC<StateTypeProps> = ({state, dispatch}) => {
  return (
    <div className="App">
      <Left state={state}/>
      <Center state={state} dispatch={dispatch}/>
      <Right/>
    </div>
  );
}

export default App;
