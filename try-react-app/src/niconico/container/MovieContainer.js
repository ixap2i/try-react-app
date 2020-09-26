import React from 'react';
import './MovieContainer.css'
import MovieList from '../components/MovieList.js';

import clock from '../icon_assets/clock.svg';
import blog from '../icon_assets/blog.svg';
import mail from '../icon_assets/mail.svg';
import line from '../icon_assets/line.svg';
import twitter from '../icon_assets/twitter.svg';
import facebook from '../icon_assets/facebook.svg';

import ReactTooltip from 'react-tooltip';
  
function MovieContainer() {
  return(
    <div className="o-movieContainer">
      <div className="m-movieInfoWrapper">
        <section className="m-socialContent">
          <img src={clock} className="a-toolIcon -clock" data-tip data-for='clock' alt="clock icon" />
          <a href="https://letterneginr.hateblo.jp/" rel="noopener" target="_blank"><img src={blog} data-tip data-for='blog' className="a-toolIcon -blog" alt="blog icon" /></a>
          <a href="mailto:ayamashita124@gmail.com" rel="noopener"><img src={mail} data-tip data-for='mail' className="a-toolIcon" alt="mail icon" /></a>
          <ReactTooltip id='clock' aria-haspopup='true'>
            <div id='clockInner'></div>
          </ReactTooltip>
          <ReactTooltip id='blog' aria-haspopup='true' >
            <p>ブログページです（エンジニアリング中心）</p>
          </ReactTooltip>
          <ReactTooltip id='mail' aria-haspopup='true' >
            <p>製作者にメールを送れます（メーラーが立ち上がります）</p>
          </ReactTooltip>
        </section>
        <section className="m-socialContent"> 
          <a href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Flocalhost%3A3000" target="_blank" data-tip data-for='line' rel="noopener">
            <img src={line} className="a-toolIcon" alt="line icon" />
          </a>
          <a href="http://twitter.com/share?url=https%3A%2F%2Flocalhost%3A3000&text=ニコニコ動画風アプリ by ixap2i&hashtags=React.js,ニコニコ動画風" target="_blank" data-tip data-for='twitter' rel="noopener">
            <img src={twitter} className="a-toolIcon" alt="twitter icon" />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://localhost:3000" target="_blank" data-tip data-for='facebook' rel="noopener">
            <img src={facebook} className="a-toolIcon" alt="facebook icon" />
          </a>
          <ReactTooltip id='line' aria-haspopup='true'>
            <p>LINEで共有できます（ログインすると共有画面に移ります）</p>
          </ReactTooltip>
          <ReactTooltip id='twitter' aria-haspopup='true'>
            <p>twitterで共有できます（ログインするとツイート画面に移ります）</p>
          </ReactTooltip>
          <ReactTooltip id='facebook' aria-haspopup='true'>
            <p>facebookで共有できます（ログインすると投稿画面に移ります）</p>
          </ReactTooltip>
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

export default MovieContainer;
