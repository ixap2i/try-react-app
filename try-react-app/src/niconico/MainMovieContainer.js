import React from 'react';
import './MainMovieContainer.css'
import movie_img from './hero_img.png';
import MovieContainer from './MovieContainer'

function MainMovieContainer() {
  return(
      <section class="o-movieContainer">
        <img src={movie_img} class="a-movie" alt="movie_img" />
        <MovieContainer />
      </section>);
}
export default MainMovieContainer;
