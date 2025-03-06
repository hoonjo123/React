import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Count';

function App() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Bulb />
      </div>
    </>
  );
}

export default App;
