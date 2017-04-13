import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StreamsList from './Components/StreamsList';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('stream list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StreamsList />, div);
});
