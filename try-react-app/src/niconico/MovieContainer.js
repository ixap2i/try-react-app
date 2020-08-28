import React from 'react';
import './MovieContainer.css'
import MovieList from './MovieList';

function MovieContainer() {
  return(
    <div class="o-movieContainer">
      <section class="m-socialContent">
        
      </section>
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
