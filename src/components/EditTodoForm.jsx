import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [initialValue, setInitialValue] = useState(task.task);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const trimmedValue = value.trim();
    if (trimmedValue !== "") {
      editTodo(value, task.id);
      setValue("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a task.");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setErrorMessage("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
      {/* <button type="button" className="todo-btn" onClick={handleCancel} >
        prevue 
      </button> */}
    </form>
  );
};
