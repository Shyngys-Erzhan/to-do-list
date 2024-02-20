import { useState } from "react";
import style from "./EditTodoForm.module.css";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className={style.TodoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.todo_input}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="t">
        Update Task
      </button>
    </form>
  );
};
