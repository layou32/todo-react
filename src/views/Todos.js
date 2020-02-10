import React from 'react';
import TodoCapture from '../components/todo-capture/TodoCapture';
import TodoList from '../components/todo-list/TodoList'
import '../styles/todo/todo-view.css';

function Todos () {
  return (
    <div>
      <div>
        <TodoCapture />
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;
