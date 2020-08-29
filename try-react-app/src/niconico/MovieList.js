import React from 'react';
import './MovieList.css';

function MovieList() {
  return(
    <article className="m-anchorBox">
      <div className="o-movieAnchor">
          <div>
              次の動画
          </div>
          <div className="o-movieAnchorAside">
              連続再生
              <div className="a-toggle__wrapper">
                <input type="checkbox" className="a-toggle" name="" value="0" />
                <span className="a-toggleSwitch"></span>
              </div>
          </div>
      </div>
      <div className="o-movieListThumbnail">
          {/* <img className="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div className="a-movieThumbnail"></div>
          <span className="a-title">■採用結果</span>
      </div>
      <div className="o-movieListThumbnail">
          {/* <img className="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div className="a-movieThumbnail"></div>
          <span className="a-title">■採用結果</span>
      </div>
      <div className="o-movieListThumbnail">
          {/* <img className="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div className="a-movieThumbnail"></div>
          <span className="a-title">■採用結果</span>
      </div>
      <div className="o-movieListThumbnail">
          {/* <img className="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div className="a-movieThumbnail"></div>
          <span className="a-title">■採用結果</span>
      </div>
    </article>);
}
export default MovieList;
