import React from 'react';
import './MovieContainer.css'
import MovieList from './MovieList';
import clock from './clock.svg';
import directory from './directory.svg';
import line from './line.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function MovieContainer() {
  return(
    <div class="o-movieContainer">
      <div class="m-movieInfoWrapper">
        <section class="m-socialContent">
          <img src={clock} class="a-toolIcon" alt="" />
          <img src={directory} class="a-toolIcon" alt="" />
          <img src={directory} class="a-toolIcon" alt="" />
        </section>
        <section class="m-socialContent">
          <img src={line} class="a-toolIcon" alt="" />
          <img src={twitter} class="a-toolIcon" alt="" />
          <img src={facebook} class="a-toolIcon" alt="" />
        </section>      
      </div>
      <section class="m-movieInfoWrapper">
        <article class="m-commentList">
          コメント
        </article>
        <article class="m-movieList">
          動画リスト
        </article>  
      </section>
      <MovieList />
    </div>);
}
export default MovieContainer;
