import { useState } from "react";
import style from "./TodoForm.module.css";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form className={style.TodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.todo_input}
        placeholder="добавьте задачу"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
