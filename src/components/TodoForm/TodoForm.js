import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Input, Button } from "antd";

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
      <Input
        type="text"
        className={style.todo_input}
        placeholder="add task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button className={style.todo_button} type="primary" htmlType="submit">
        <CiCircleCheck className={style.icon_check} size={24} />
      </Button>
    </form>
  );
};
