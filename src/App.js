import React from 'react';
import logo from './logo.svg';
import './App.css';
import KimiaButton from './components/KimiaButton';
import {ToastPage} from './components/KimiaToast';
import {Spinner} from './components/elements/KimiaSpinner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <KimiaButton color="primary" >Primary</KimiaButton>
      <ToastPage /> 
      <Spinner color="#1d4ed8" className="h-12" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
