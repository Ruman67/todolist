import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  if (!todo) return null;

  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(todo.id)} className={`${todo.completed ? 'completed' : ''}`}>
        {todo.task}
        {todo.reminder && (
          <span className='reminder'>
            {new Date(todo.reminder).toLocaleString()}
          </span>
        )}
      </p>
      <div>
        <button onClick={() => editTodo(todo.id)}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    reminder: PropTypes.instanceOf(Date)
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
};

export default Todo;
