import { useState } from "react";
import { Input, Button } from "antd";

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
      <Input
        type="text"
        className={style.todo_input}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button type="primary" htmlType="submit">
        Update Task
      </Button>
    </form>
  );
};
