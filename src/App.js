import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <MainContent />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
