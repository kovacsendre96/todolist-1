import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useState } from "react";
import { DUMMY_TODOS } from "../../todoArray";

const TodoList = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [status, setStatus] = useState("progress");

  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  return (
    <div className="todo-list">
      <Form
        todos={todos}
        setTodos={setTodos}
        enteredTitle={enteredTitle}
        setEnteredTitle={setEnteredTitle}
        enteredDate={enteredDate}
        setEnteredDate={setEnteredDate}
        status={status}
        addTodoHandler={addTodoHandler}
      />
      <List
        todos={todos}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};

export default TodoList;
