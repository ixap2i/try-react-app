import React from 'react';
import './Header.css';


function Header() {
  return (
    <header className="header">
			<ul class="header__menu">
				<li>山下</li>
				<li>経歴</li>
				<li>開発</li>
				
			</ul>

			<ul class="header__subMenu">
				<li class="login">ログイン</li>
				<li class="saiyo">採用</li>
				<li>メニュー▼</li>
			</ul>
    </header>
  );
}

export default Header;
