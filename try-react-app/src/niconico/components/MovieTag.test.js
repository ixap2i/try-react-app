import React from 'react';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import MovieTag from './MovieTag.js'
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
test('ルートが所定のタグを含んでいること', () => {
  act(() => {
    render(<MovieTag />, container);
  });
  expect(container.textContent).toBe('タグ編集応募者山下 茜子東京福祉専門学校Webエンジニア実はアイコンは自家製イラレが便利React.jsThree.js');
});
