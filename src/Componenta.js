import React, { useState } from 'react';
import './TodoApp.css';

const TodoInput = ({ inputValue, handleChange, addTodo }) => {
  return (
    <div className="todo-input">
      <input id='in'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button className='btn btn-success' onClick={addTodo}>Add</button>
    </div>
  );
};

const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <li>
      {todo}
      <button className='btn btn-danger' onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoInput
        inputValue={inputValue}
        handleChange={handleChange}
        addTodo={addTodo}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
