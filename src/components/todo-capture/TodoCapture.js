import React from 'react';
import '../../styles/todo/capture-todo.css'

function TodoCapture () {
  return (
    <div className="inline-form">
      <div><input className="input-todo" type="text" placeholder="Register todo!" /></div>
      <div><button className="btn-input-todo">Register!</button></div>
    </div>
  );
};

export default TodoCapture;
