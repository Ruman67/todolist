import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task, reminder) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false, isEditing: false, reminder }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <center><h1>Things to do!!!</h1></center>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} task={todo.task} editTodo={(task) => editTask(task, todo.id)} />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
