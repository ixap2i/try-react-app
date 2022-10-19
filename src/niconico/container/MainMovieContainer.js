// @ts-nocheck
import React from 'react';
import './MainMovieContainer.css'
import MovieContainer from './MovieContainer'
import SVGs from '../SVGs'
function MainMovieContainer() {
  return(
    <section className="o-movieWrapper">
      <div className="a-movie">
        <SVGs></SVGs>
      </div>
      <MovieContainer />
    </section>);
}
export default MainMovieContainer;
