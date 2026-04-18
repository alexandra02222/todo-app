import React, { useState } from 'react';
import { AppContainer, InputField, AddButton, TodoItem, DeleteButton } from './components/StyledComponents';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <AppContainer>
      <h1>To-Do List</h1>

      <div>
        <InputField
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new to-do"
        />
        <AddButton onClick={addTodo}>Add To-Do</AddButton>
      </div>

      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <DeleteButton onClick={() => deleteTodo(todo.id)}>
              Delete
            </DeleteButton>
          </TodoItem>
        ))}
      </div>
    </AppContainer>
  );
};

export default TodoApp;