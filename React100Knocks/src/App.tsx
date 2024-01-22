import React from 'react';
import './App.css';
import Todo from './component/todo/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Todo />
        </p>
      </header>
    </div>
  );
}

export default App;
