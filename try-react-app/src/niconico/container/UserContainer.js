import React from 'react';
import './UserContainer.css';

import UserIcon from '../icon_assets/user_icon.png';
import follow_icon from '../icon_assets/follow_icon.svg';
import list from '../icon_assets/list.svg';


function UserContainer() {
  return(<div className="o-titleWrapper">
      <div className="a-userGroupName"><img src={list} className="a-movieGroupIcon" alt="heart movie icon" />{renderGroup(movieInfo)}</div>
      <h2 className="a-movieTitle">{renderTitle(movieInfo)}</h2>
      <h3 className="a-movieSubTitle">{renderSubTitle(movieInfo)}</h3>
       {renderUserInfo(user)}
    </div>);
}
// padding-left: 24px;
// background: linear-gradient(90deg,hsla(0,0%,95.7%,0),#f4f4f4 16%);
const user = {
  nickName: 'ixap2i',
  firstName: 'Akane',
  lastName: 'Yamashita',
  imageTag: <img src="http://placehold.jp/99ccff/003366/150x150.png?text=Test%20image" alt="Test image" />
};

const movieInfo = {
  title: '【フロントエンドエンジニア】■1週間でReact.jsを勉強してポートフォリオを作ってみた',
  subTitle: '▷1週間でReact.jsの環境構築、ニコニコ動画の再生画面風ポートフォリオを作成しました。素材はsvgで作成し、軽量化と、色の変更やアニメーションなどバリエーションのある表現を考え選択しました。\nThree.jsは動画部分に使用し、canvasにsvgの描画を可能にしています。',
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
    <img src={UserIcon} className="a-icon -user" alt={user.firstName + user.lastName} />
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
