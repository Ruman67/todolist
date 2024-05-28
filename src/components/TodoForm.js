import React from 'react'

const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='what is the task today'/>
      <button type='submit' className='todo-btn'>submit</button>
    </form>
  )
}

export default TodoForm;
