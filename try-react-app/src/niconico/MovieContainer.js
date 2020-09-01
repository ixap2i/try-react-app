import React from 'react';
import './MovieContainer.css'
import MovieList from './MovieList.js';
import clock from './clock.svg';
import blog from './blog.svg';
import mail from './mail.svg';
import line from './line.svg';
import twitter from './twitter.svg';
import facebook from './facebook.svg';

function MovieContainer() {
  return(
    <div className="o-movieContainer">
      <div className="m-movieInfoWrapper">
        <section className="m-socialContent">
          <img src={clock} className="a-toolIcon" alt="clock icon" />
          <a href="https://letterneginr.hateblo.jp/" target="_blank"><img src={blog} className="a-toolIcon -blog" alt="" /></a>
          <a href="mailto:ayamashita124@gmail.com" className=""><img src={mail} className="a-toolIcon" alt="mail icon" /></a>
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
