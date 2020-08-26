import React from 'react';
import logo from './logo.svg';
import './App.css';

const user = {
  firstName: 'Akane',
  lastName: 'Yamashita',
  imageTag: <img src="http://placehold.jp/99ccff/003366/150x150.png?text=Test%20image" alt="Test image" />
};

function formatName(user) {
  return user.firstName + '' + user.lastName;
}

function renderUserImage(user) {
  return user.imageTag;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {formatName(user)} World</h1>

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
      <article>
       {renderUserImage(user)} 
      </article>
    </div>
  );
}

export default App;
