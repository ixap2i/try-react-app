import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import MovieList from './MovieList.js'
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
test('MovieListが動画のサイドメニューとサムネイルを含んでいること', () => {
  act(() => {
    render(<MovieList />, container);
  });
  expect(container.querySelector('section[class="o-movieSideMenu"]')).toBeInTheDocument();
  expect(container.querySelector('div[class="o-movieListThumbnail"]')).toBeInTheDocument();
});
