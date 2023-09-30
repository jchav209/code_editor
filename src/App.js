// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { on } from 'codemirror';

function App() {
  const [openedEditor, setOpenedEditor] = useState('html'); 

  const onTabClick = (editorName) => {
    // console.log("Working") // This is to test the function if it's working.
    setOpenedEditor(editorName);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* This code commented is a link to https://reactjs.org */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <p>Welcome to the editor!</p>
      <div className="tab-button-container">

        <Button title="HTML" onClick = {() => {
          onTabClick('html')
        }}></Button>

        <Button title="CSS" onClick = {() => {
          onTabClick('css')
        }}></Button>

        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }}></Button>
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
          <p>The HTML editor is open</p>
          ) : openedEditor === 'css' ? (
            <p>The CSS editor is open</p>
          ) : (
            <p>The JavaScript editor is open</p>
          )
        }
      </div>
    </div>
  );
}

export default App;

