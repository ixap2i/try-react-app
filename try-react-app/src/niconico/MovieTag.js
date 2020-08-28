import React from 'react';

import './MovieTag.css';

function MovieTag() {
  return(<div id="tag">
    <span class="a-movieTag -gray">タグ編集</span>
      {movieTag.map((tagInfo) => (<MovieTags value={tagInfo} />))}
    </div>);
}

const movieTag = ['応募者', '山下 茜子', '東京福祉専門学校', 'Webエンジニア'];

const MovieTags = ({value}) => (<span class="a-movieTag">{value}<span class="a-tag -icon">百</span></span>);
export default MovieTag;
