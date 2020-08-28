import React from 'react';
import user_icon from './user_icon.png';
import './UserContainer.css';

function UserContainer() {
  return(<div>
      <h2>{renderTitle(user)}</h2>
      <h3>{renderSubTitle(user)}</h3>
       {renderUserInfo(user)}
    </div>);
}

const user = {
  nickName: 'ixap2i',
  firstName: 'Akane',
  lastName: 'Yamashita',
  title: '【フロントエンドエンジニア】■1週間でReact.jsを勉強してポートフォリオを作ってみた',
  subTitle: '▷1週間でどれだけできるのか〜説明文です',
  imageTag: <img src="http://placehold.jp/99ccff/003366/150x150.png?text=Test%20image" alt="Test image" />
};

const movieInfo = {
  saisei: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">再生数</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  comment: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">コメント</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  mylist: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">マイリスト数</span><span class="a-tag -movieInfo -bold">252,525</span></div>,
  junle: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">ジャンル</span><span class="a-tag -movieInfo -bold">プログラミング</span></div>,
  ranking: <div class="o-userInfo__box -movieInfo"><span class="a-tag -movieInfo">ランキング最高順位</span><span class="a-tag -movieInfo -bold">1位</span></div>,  
};

function renderTitle(user) {
  return user.title;
}

function renderSubTitle(user) {
  return user.subTitle;
}

function renderUserInfo(user) {
  return <article class="o-userInfo">
    <img src={user_icon} class="a-icon -user" alt={user.firstName + user.lastName} />
    <div>
      <span class="a-tag -name">{user.nickName}</span>
      <div class="o-userInfo">
        <span class="a-tag -square">チャンネル</span>
        <span class="a-tag -square">投稿動画</span>
      </div>
    </div>
    <img src="" class="a-icon" alt="" />
    <span class="a-icon -desc">フォロー</span>

    <div class="o-userInfo">
      {movieInfo.saisei}
      {movieInfo.comment}
      {movieInfo.mylist}
      {movieInfo.junle}
      {movieInfo.ranking}
    </div>
  </article>;
}
export default UserContainer;
