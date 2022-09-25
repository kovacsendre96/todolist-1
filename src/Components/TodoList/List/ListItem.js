import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ListItem = ({ title, date, status, setTodos, id }) => {
  const setStatusHandler = () => {
    setTodos((prevTodos) => {
      const changedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          if (todo.status === "progress") {
            console.log("Endre");
            todo.status = "success";
            
          } else if (todo.status === "success") {
            todo.status = "progress";
            
          }
        }
        return todo;
      });
      console.log(changedTodos);
      return changedTodos;
    });
  };

  const setClass = () => {
    if (status === "success") {
      return "todo-success";
    }
    return "";
  };

  return (
    <div
      className="flex-center card todo"
      style={{
        backgroundColor: status === "success" ? "lightgrey" : "",
      }}
    >
      <div className={`${setClass()}`}>{title}</div>
      <div>
        <div className="flex-center settings">
          <button className="settings-btn" onClick={setStatusHandler}>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </button>
          <button className="margin-sm settings-btn">
            <FontAwesomeIcon icon={faPencil} className="pencil-icon" />
          </button>
          <button className="settings-btn">
            <FontAwesomeIcon icon={faTrash} className="trash-icon" />
          </button>
        </div>
        <div className="margin-sm date">{date}</div>
      </div>
    </div>
  );
};

export default ListItem;
