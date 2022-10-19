// @ts-nocheck
import React from 'react';

import './Main.css';
import UserContainer from './container/UserContainer.js';
import MainMovieContainer from './container/MainMovieContainer.js';
import MovieTag from './components/MovieTag.js';

function Main() {
  return (
    <div className="Main">
      <UserContainer />
      <MovieTag />
      <MainMovieContainer />
    </div>
  );
}
export default Main;
