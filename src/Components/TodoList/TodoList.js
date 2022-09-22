import React from "react";
import List from "./List/List"
import Form from "./Form/Form";

const TodoList = () => {
  return (
    <div className="todo-list">
      <Form />
      <List />
    </div>
  );
};

export default TodoList;
