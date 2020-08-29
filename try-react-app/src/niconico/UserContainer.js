import React from 'react';
import user_icon from './user_icon.png';
import follow_icon from './follow_icon.svg';

import './UserContainer.css';

function UserContainer() {
  return(<div class="o-titleWrapper">
      <span>{renderGroup(movieInfo)}</span>
      <h2>{renderTitle(movieInfo)}</h2>
      <h3>{renderSubTitle(movieInfo)}</h3>
       {renderUserInfo(user)}
    </div>);
}

const user = {
  nickName: 'ixap2i',
  firstName: 'Akane',
  lastName: 'Yamashita',
  imageTag: <img src="http://placehold.jp/99ccff/003366/150x150.png?text=Test%20image" alt="Test image" />
};

const movieInfo = {
  title: '【フロントエンドエンジニア】■1週間でReact.jsを勉強してポートフォリオを作ってみた',
  subTitle: '▷1週間でどれだけできるのか〜説明文です',
  group: 'ノリノリでWebコーディングする会',
  saisei: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">再生数</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  comment: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">コメント</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  mylist: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">マイリスト数</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  junle: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">ジャンル</span><span class="a-tag -movieInfo -bold">プログラミング</span></div>,
  ranking: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">ランキング最高順位</span><span class="a-tag -movieInfo -bold">1位</span></div>,  
};

function renderTitle(movieInfo) {
  return movieInfo.title;
}

function renderSubTitle(movieInfo) {
  return movieInfo.subTitle;
}

function renderGroup(movieInfo) {
  return movieInfo.group;
}
function renderUserInfo(user) {
  return <div class="o-userInfoWrapper">
    <article class="o-userInfo">
    <img src={user_icon} class="a-icon -user" alt={user.firstName + user.lastName} />
    <div>
      <span class="a-tag -name">{user.nickName}</span>
      <div class="o-userInfo">
        <span class="a-tag -square">チャンネル</span>
        <span class="a-tag -square">投稿動画</span>
      </div>
    </div>
    </article>

    <div class="o-userInfo__box -movieInfo">
      <img src={follow_icon} class="a-icon -follow" alt="" />
      <span class="a-icon -desc">フォロー</span>      
    </div>

    <div class="o-userInfo">
      {movieInfo.saisei}
      {movieInfo.comment}
      {movieInfo.mylist}
      {movieInfo.junle}
      {movieInfo.ranking}
    </div>
  </div>;
}
export default UserContainer;
