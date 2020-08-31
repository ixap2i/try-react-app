import React from 'react';
import './MovieContainer.css'
import MovieList from './MovieList.js';
import clock from './clock.svg';
import directory from './directory.svg';
import mail from './mail.svg';
import line from './line.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function MovieContainer() {
  return(
    <div className="o-movieContainer">
      <div className="m-movieInfoWrapper">
        <section className="m-socialContent">
          <img src={clock} className="a-toolIcon gradient-path" alt="clock icon" />
          <img src={directory} className="a-toolIcon" alt="" />
          <img src={mail} className="a-toolIcon" alt="" />
        </section>
        <section className="m-socialContent">
          <img src={line} className="a-toolIcon" alt="line icon" />
          <img src={twitter} className="a-toolIcon" alt="twitter icon" />
          <img src={facebook} className="a-toolIcon" alt="facebook icon" />
        </section>      
      </div>
      <section className="m-movieInfoWrapper">
        <article className="m-commentList">
          コメント
        </article>
        <article className="m-movieList">
          動画リスト
        </article>  
      </section>
      <MovieList />
    </div>);
}

function bookmark() {

}

function addWatchList() {

}

function sendEmail() {

}

export default MovieContainer;
