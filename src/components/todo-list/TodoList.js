import React from 'react';
import '../../styles/todo/list-todos.css'

function TodoList () {
  const ClumbsyTodo = ['Drink', 'Run', 'Eat'];
  const ClumbsyList = ClumbsyTodo.map(todo => <li>{todo}</li>);
  return (
    <div>
      <ul>
        {ClumbsyList}
      </ul>
    </div>
  );
};

export default TodoList;
