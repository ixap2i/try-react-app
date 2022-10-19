// @ts-nocheck
import React from 'react';
import './Header.css';
import nico_mark from '../icon_assets/heart_movie.svg';

function Header() {
  return (
    <header className="o-header">
			<ul className="o-header__menu">
				<li>
					<img src={nico_mark} className="a-headerIcon" alt="niconico" />
				</li>
				{functionMenu.map((menu, idx) => (<li key={idx}>{menu}</li>))}
			</ul>
			<ul className="o-header__subMenu">
				{functionSubMenu.map((smenu, idx) => (<li key={idx} className={idx === 1 ? 'login' : 'saiyo'}>{smenu}</li>))}
				<li>メニュー▼</li>
			</ul>
    </header>
  );
}

const functionMenu = ['山下', '経歴', '開発'];
const functionSubMenu = ['ログイン', '採用'];
export default Header;
