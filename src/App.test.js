import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import App from './App';
import Header from './niconico/components/Header'
import UserContainer from './niconico/container/UserContainer'
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
test('ルートがメニュー（ヘッダー）を含んでいること', () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe('山下経歴開発ログイン採用メニュー▼');
});

test('UserContainerがグループ名とタイトル名を含んでいること', () => {
  act(() => {
    render(<UserContainer />, container);
  });
  expect(container.querySelector('h2').textContent).toBe('【フロントエンドエンジニア】■1週間でReact.jsを勉強してポートフォリオを作ってみた');
  expect(container.querySelector('h3').textContent).toBe('▷1週間でReact.jsの環境構築、ニコニコ動画の再生画面風ポートフォリオを作成しました。素材はsvgで作成し、軽量化と、色の変更やアニメーションなどバリエーションのある表現を考え選択しました。\nThree.jsは動画部分に使用し、canvasにsvgの描画を可能にしています。');
  expect(container.querySelector('div[class="a-userGroupName"]').textContent).toBe('ノリノリでWebコーディングする会');
});

test('UserContainerがユーザー情報を含んでいること', () => {
  act(() => {
    render(<UserContainer />, container);
  });
  expect(container.querySelector('span[class="a-tag -movieInfo"]')).toBeInTheDocument();
});

test('UserContainerがユーザー情報のタグを含んでいること', () => {
  act(() => {
    render(<UserContainer />, container);
  });
  expect(container.querySelector('span[class="a-tag -square"]')).toBeInTheDocument();
});

