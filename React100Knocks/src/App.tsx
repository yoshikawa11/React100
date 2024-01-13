import React from 'react';
import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Counter/>
        </p>
      </header>
    </div>
  );
}

export default App;
