import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './components/List';
import todoStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoList store={todoStore} />
  </React.StrictMode>
);
