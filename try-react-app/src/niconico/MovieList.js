import React from 'react';
import './MovieList.css';

function MovieList() {
  return(
    <article class="m-anchorBox">
      <div class="o-movieAnchor">
          <div>
              次の動画
          </div>
          <div class="o-movieAnchorAside">
              連続再生
              <div class="a-toggle__wrapper">
                <input type="checkbox" class="a-toggle" name="" value="0" />
                <span class="a-toggleSwitch"></span>
              </div>
          </div>
      </div>
      <div class="o-movieListThumbnail">
          {/* <img class="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div class="a-movieThumbnail"></div>
          <span class="a-title">■採用結果</span>
      </div>
      <div class="o-movieListThumbnail">
          {/* <img class="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div class="a-movieThumbnail"></div>
          <span class="a-title">■採用結果</span>
      </div>
      <div class="o-movieListThumbnail">
          {/* <img class="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div class="a-movieThumbnail"></div>
          <span class="a-title">■採用結果</span>
      </div>
      <div class="o-movieListThumbnail">
          {/* <img class="a-movieThumbnail" alt="movie thumbnail" /> */}
          <div class="a-movieThumbnail"></div>
          <span class="a-title">■採用結果</span>
      </div>
    </article>);
}
export default MovieList;
