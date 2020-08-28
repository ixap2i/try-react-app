import React from 'react';
import './Header.css';
import nico_mark from './nico_mark.png';

function Header() {
  return (
    <header className="header">
			<ul class="header__menu">
				<li>
					<img src={nico_mark} class="a-headerIcon" alt="niconico" />
				</li>
				{functionMenu}
			</ul>

			<ul class="header__subMenu">
				{functionSubMenu}
			</ul>
    </header>
  );
}

const functionMenu = [<li>山下</li>, <li>経歴</li>, <li>開発</li>];
const functionSubMenu = [<li class="login">ログイン</li>, <li class="saiyo">採用</li>, <li>メニュー▼</li>];
export default Header;
