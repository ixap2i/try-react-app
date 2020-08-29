import React from 'react';
import './MainMovieContainer.css'
import movie_img from './hero_img.png';
import MovieContainer from './MovieContainer'

function MainMovieContainer() {
  return(
      <section className="o-movieWrapper">
        <img src={movie_img} className="a-movie" alt="movie_img" />
        <MovieContainer />
      </section>);
}
export default MainMovieContainer;
