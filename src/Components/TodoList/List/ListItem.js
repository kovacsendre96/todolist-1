import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const ListItem = ({ title, date, status, setTodos, id, todos }) => {
  //States:
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  //Handlers:
  const setStatusHandler = () => {
    const changedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.status === "progress") {
          todo.status = "success";
        } else if (todo.status === "success") {
          todo.status = "progress";
        }
      }
      return todo;
    });
    setTodos(changedTodos);
  };

  const setClass = () => {
    if (status === "success") {
      return "todo-success";
    }
    return "";
  };

  const deleteTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const newTitleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const acceptSettingsHandler = () => {
    const changedTitle = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = newTitle;
      }
      return todo;
    });
    setTodos(changedTitle);
    setIsEdit(!isEdit);
  };

  const cancelSettingHandler = () => {
    setIsEdit(!isEdit);
    setNewTitle(title);
  };

  return (
    <div
      className="flex-center card todo"
      style={{
        backgroundColor: status === "success" ? "lightgrey" : "",
      }}
    >
      {isEdit && (
        <input value={newTitle} onChange={newTitleChangeHandler}></input>
      )}
      {!isEdit && (
        <>
          <div className={`${setClass()}`}>{title}</div>

          <div className="flex-center settings">
            <button className="settings-btn" onClick={setStatusHandler}>
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </button>
            <button
              className="margin-sm settings-btn"
              onClick={() => setIsEdit(!isEdit)}
            >
              <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
            </button>
            <button className="settings-btn" onClick={deleteTodoHandler}>
              <FontAwesomeIcon icon={faTrash} className="trash-icon" />
            </button>
          </div>
          <div className="margin-sm date">{date}</div>
        </>
      )}
      {isEdit && (
        <div>
          <div className="flex-center settings">
            <button
              className="settings-btn margin-sm"
              onClick={acceptSettingsHandler}
            >
              <FontAwesomeIcon icon={faFloppyDisk} className="check-icon" />
            </button>

            <button
              className="settings-btn margin-sm"
              onClick={cancelSettingHandler}
            >
              <FontAwesomeIcon icon={faCircleXmark} className="trash-icon" />
            </button>
          </div>
          <div className="margin-sm date">{date}</div>
        </div>
      )}
    </div>
  );
};

export default ListItem;
