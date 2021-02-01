import React, {useState} from 'react';

import './App.css';
import {Counter} from "./components/Counter/Counter";




function App() {

    const [error, setError] = useState<string>('hello');
  return (
    <div className="App">
      <Counter error={error} setError={setError}/>
    </div>
  );
}

export default App;
