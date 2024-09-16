// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm';
import UserInfo from './UserInfo';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm setUser={setUser} />} />
          <Route path="/user-info" element={<UserInfo user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
