import React, { useState } from "react";

export const TodoForm = ({ addTodo, todos }) => {
  console.log(todos, "ooooooooooooooooooooooooooooooooo");

  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const trimmedValue = value.trim();

    if (trimmedValue === "") {
      setErrorMessage("Please enter a task.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    if (todos.some((todo) => todo.task === trimmedValue)) {
      setErrorMessage("Todo already exists.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    if (
      trimmedValue !== "" &&
      !todos.some((todo) => todo.task === trimmedValue)
    ) {
      addTodo(trimmedValue);
      setValue("");
      setErrorMessage("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today ?"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
