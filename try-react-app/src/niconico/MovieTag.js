import React from 'react';
import hyaku_icon from './hyaku.svg';
import './MovieTag.css';

function MovieTag() {
  return(
    <div class="o-tagContainer">
      <span class="a-movieTag -gray">タグ編集</span>
      <div class="o-tagWrapper">
        {movieTag.map((tagInfo) => (<MovieTags value={tagInfo} />))}
      </div>
    </div>
);
}

const movieTag = ['応募者', '山下 茜子', '東京福祉専門学校', 'Webエンジニア', '応募者', '山下 茜子', '東京福祉専門学校', 'Webエンジニア'];

const MovieTags = ({value}) => (<span class="a-movieTag">{value}<img src={hyaku_icon} class="a-tag -icon" alt="" /></span>);
export default MovieTag;
