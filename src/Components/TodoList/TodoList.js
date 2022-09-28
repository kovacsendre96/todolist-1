import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useState } from "react";
import { DUMMY_TODOS } from "../../todoArray";

const TodoList = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const copyTodos = todos;
 
  return (
    <div className="todo-list">
      <Form
        todos={todos}
        setTodos={setTodos}
        copyTodos={copyTodos}
        />
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default TodoList;
