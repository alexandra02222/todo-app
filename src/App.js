import React from 'react';
import {
  AppContainer,
  InputField,
  AddButton,
  TodoItem,
  DeleteButton
} from './components/StyledComponents';

const TodoApp = () => {
  return (
    <AppContainer>
      <h1>To-Do List</h1>

      <div>
        <InputField
          type="text"
          placeholder="Enter a new to-do"
        />
        <AddButton>Add To-Do</AddButton>
      </div>

      <div>
        <TodoItem>
          <span>Sample To-Do</span>
          <DeleteButton>Delete</DeleteButton>
        </TodoItem>
      </div>
    </AppContainer>
  );
};

export default TodoApp;