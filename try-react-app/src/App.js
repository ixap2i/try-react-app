import React from 'react';
import Header from './niconico/Header.js'
// import UserContainer from './UserContainer.js'
// import MovieContainer from './MovieContainer.js'
// import MovieTag from './MovieTag.js'
// import MainMovieContainer from './MainMovieContainer.js'
import logo from './logo.svg';
import spinner from './spinner.gif';
import './App.css';

const user = {
  firstName: 'Akane',
  lastName: 'Yamashita',
  title: '【フロントエンドエンジニア】■1週間でReact.jsを勉強してポートフォリオを作ってみた',
  subTitle: '▷1週間でどれだけできるのか〜説明文です',
  imageTag: <img src="http://placehold.jp/99ccff/003366/150x150.png?text=Test%20image" alt="Test image" />
};

const topTable = React.createElement(
  'table',
  {className: 'o-table'},
  'Hello World!'
);

function createTable() {
  return React.createElement(
    'table',
    {className: 'o-table'},
    'Hello World!!'
  );
}

function renderTitle(user) {
  return user.title;
}

function renderSubTitle(user) {
  return user.subTitle;
}

function renderUserImage(user) {
  return user.imageTag;
}

function renderTopTable() {
  return topTable;
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h2>{renderTitle(user)}</h2>
        <h3>{renderSubTitle(user)}</h3>

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
        {/* <UserContainer />
        <MovieContainer />
        <MovieTag /> */}
      </article>
      <section>
        {/* <MainMovieContainer /> */}
      </section>
      {createTable()}
    </div>
  );
}

export default App;
