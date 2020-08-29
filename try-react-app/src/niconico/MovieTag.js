import React from 'react';
import hyaku_icon from './hyaku.svg';
import './MovieTag.css';

function MovieTag() {
  return(
    <div className="o-tagContainer">
      <span className="a-movieTag -gray">タグ編集</span>
      <div className="o-tagWrapper">
        {movieTag.map((tagInfo, index) => (<MovieTags key={index} value={tagInfo} />))}
      </div>
    </div>
);
}

const movieTag = ['応募者', '山下 茜子', '東京福祉専門学校', 'Webエンジニア', '応募者', '山下 茜子', '東京福祉専門学校', 'Webエンジニア'];

const MovieTags = ({value}) => (<span className="a-movieTag">{value}<img src={hyaku_icon} className="a-tag -icon" alt="" /></span>);
export default MovieTag;
