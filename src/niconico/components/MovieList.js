// @ts-nocheck
import React from 'react';
import './MovieList.css';

function MovieList() {
  return(
    <aside className="m-anchorBox">
      <section className="o-movieSideMenu">
        <div>
          次の動画
        </div>
        <div className="o-movieSideMenuAside">
          連続再生
          <div className="a-toggle__wrapper">
            <div className="a-toggle"></div>
            <span className="a-toggleSwitch"></span>
          </div>
        </div>
      </section>
      <div className="o-movieListThumbnail">
        <div className="a-movieThumbnail"></div>
        <span className="a-title">■1週間でReact.jsを勉強してポートフォリオを作ってみた part2</span>
      </div>
      <div className="o-movieListThumbnail">
        <div className="a-movieThumbnail"></div>
        <span className="a-title">■1週間でReact.jsを勉強してポートフォリオを作ってみた part3</span>
      </div>
      <div className="o-movieListThumbnail">
        <div className="a-movieThumbnail"></div>
        <span className="a-title">■1週間でReact.jsを勉強してポートフォリオを作ってみた part4</span>
      </div>
      <div className="o-movieListThumbnail">
        <div className="a-movieThumbnail"></div>
        <span className="a-title">■1週間でReact.jsを勉強してポートフォリオを作ってみた 終</span>
      </div>
    </aside>);
}
export default MovieList;
