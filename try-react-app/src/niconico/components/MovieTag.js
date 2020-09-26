import React from 'react';
import hyaku_icon from '../icon_assets/hyaku.svg';
import hatena_icon from '../icon_assets/hatena.svg';
import './MovieTag.css';

function MovieTag() {
  return(
    <nav className="o-tagContainer">
      <span className="a-movieTag -gray">タグ編集</span>
      <div className="o-tagWrapper">
        {movieTag.position}
        {movieTag.name}
        {movieTag.school}
        {movieTag.job}
        {movieTag.other_tag1}
        {movieTag.other_tag2}
        {movieTag.other_tag3}
        {movieTag.other_tag4}
      </div>
    </nav>
);
}

const movieTag = {
  position: <span className="a-movieTag">応募者
    <img src={hyaku_icon} className="a-tag -icon" alt="" /></span>,
  name: <span className="a-movieTag">山下 茜子
    <img src={hyaku_icon} className="a-tag -icon" alt="" /></span>,
  school: <span className="a-movieTag">東京福祉専門学校
    <img src={hyaku_icon} className="a-tag -icon" alt="" /></span>,
  job: <span className="a-movieTag">Webエンジニア
    <img src={hyaku_icon} className="a-tag -icon" alt="" /></span>,
  other_tag1: <span className="a-movieTag">実はアイコンは自家製
    <img src={hatena_icon} className="a-tag -icon" alt="" /></span>,
  other_tag2: <span className="a-movieTag">イラレが便利
    <img src={hatena_icon} className="a-tag -icon" alt="" /></span>,
  other_tag3: <span className="a-movieTag">React.js
    <img src={hatena_icon} className="a-tag -icon" alt="" /></span>,
  other_tag4: <span className="a-movieTag">Three.js<img src={hatena_icon} className="a-tag -icon" alt="" /></span>
};

// const MovieTags = ({value}) => ({value});
export default MovieTag;
