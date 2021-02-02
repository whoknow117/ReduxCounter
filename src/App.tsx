import React, {useState} from 'react';

import './App.css';
import {Counter} from "./components/Counter/Counter";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {CounterBlockType} from "./redux/counter-reducer";
import {SetCounter} from "./components/SetCounter/SetCounter";




function App() {

    const [error, setError] = useState<string>('hello');

    const counter = useSelector<AppRootStateType, CounterBlockType>( state => state.counter);




  return (
    <div className="App">
      <Counter counter={counter} error={error} setError={setError}/>
      <SetCounter counter={counter} />
    </div>
  );
}

export default App;
