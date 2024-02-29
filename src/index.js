import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// components
import TodoList from './components/TodoList';
import Timer from './components/Timer';
// stores
import todoStore from './store';
import timerStore from './store/timerStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoList store={todoStore} />
    <div className="divider" />
    <Timer timer={timerStore} />
  </React.StrictMode>
);
