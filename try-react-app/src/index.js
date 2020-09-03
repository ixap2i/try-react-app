import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


class Clock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {date: new Date()};
  }
  render() {
      return (
          <div>
            {this.state.date.toLocaleTimeString()}.
          </div>
      )
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clockInner')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
