import React from 'react';
import user_icon from './user_icon.png';
import follow_icon from './follow_icon.svg';
import list from './list.svg';

import './UserContainer.css';

function UserContainer() {
  return(<div className="o-titleWrapper">
      <div className="a-userGroupName"><img src={list} className="a-movieGroupIcon" alt="heart movie icon" />{renderGroup(movieInfo)}</div>
      <h2 className="a-movieTitle">{renderTitle(movieInfo)}</h2>
      <h3 className="a-movieSubTitle">{renderSubTitle(movieInfo)}</h3>
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
  saisei: <div className="o-userInfo__box -movieInfo"><span className="a-tag -movieInfo">再生数</span><span className="a-tag -movieInfo -bold">252,525</span></div>,
  comment: <div className="o-userInfo__box -movieInfo"><span className="a-tag -movieInfo">コメント</span><span className="a-tag -movieInfo -bold">252,525</span></div>,
  mylist: <div className="o-userInfo__box -movieInfo"><span className="a-tag -movieInfo">マイリスト数</span><span className="a-tag -movieInfo -bold">252,525</span></div>,
  junle: <div className="o-userInfo__box -movieInfo"><span className="a-tag -movieInfo">ジャンル</span><span className="a-tag -movieInfo -bold">プログラミング</span></div>,
  ranking: <div className="o-userInfo__box -movieInfo"><span className="a-tag -movieInfo">ランキング最高順位</span><span className="a-tag -movieInfo -bold">1位</span></div>,  
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
  return <div className="o-userInfoWrapper">
    <article className="o-userInfo">
    <img src={user_icon} className="a-icon -user" alt={user.firstName + user.lastName} />
    <div className="o-userInfo__box -movieInfo">
      <span className="a-tag -name">{user.nickName}</span>
      <div className="o-userInfo">
        <span className="a-tag -square">チャンネル</span>
        <span className="a-tag -square">投稿動画</span>
      </div>
    </div>
    </article>

    <div className="o-userInfo__box -movieInfo">
      <img src={follow_icon} className="a-icon -follow" alt="" />
      <span className="a-icon -desc">フォロー</span>      
    </div>

    <nav className="o-userInfo">
      {movieInfo.saisei}
      {movieInfo.comment}
      {movieInfo.mylist}
      {movieInfo.junle}
      {movieInfo.ranking}
    </nav>
  </div>;
}
export default UserContainer;
