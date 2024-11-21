// src/App.js
import React from 'react';
import './App.css';
import UserList from './components/UserList';  // Import the UserList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pet Connect App</h1>
      </header>
      <UserList /> {/* Display the user list */}
    </div>
  );
}

export default App;
