// EditTodoForm.js
import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value);
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  );
};

export default EditTodoForm;
