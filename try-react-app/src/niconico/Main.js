import React from 'react';

import './Main.css';
import UserContainer from './UserContainer.js';
import MovieTag from './MovieTag.js';
import MainMovieContainer from './MainMovieContainer.js';

function Main() {
  return (
    <div className="Main">
      <UserContainer />
      <MovieTag />
      <MainMovieContainer />
    </div>
  );
}

// function createTable() {
//   return React.createElement(
//     'table',
//     {className: 'o-table'},
//     'Hello World!!'
//   );
// }

export default Main;
