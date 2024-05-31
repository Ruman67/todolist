import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [reminder, setReminder] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value, reminder);
      setValue("");
      setReminder(null);
    }
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input'
        placeholder='What is the task today?'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <DatePicker
        selected={reminder}
        onChange={(date) => setReminder(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Set Reminder"
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};

export default TodoForm;
