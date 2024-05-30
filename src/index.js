// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TodoWrapper from './components/TodoWrapper';

ReactDOM.render(
  <React.StrictMode>
    <TodoWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
