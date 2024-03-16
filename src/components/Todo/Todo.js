import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import style from "./Todo.module.css";

const { Text } = Typography;

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={style.container}>
      <Text
        onClick={() => toggleComplete(task.id)}
        className={`${style.task} ${task.completed ? style.completed : ""}`}
      >
        {task.text}
      </Text>
      <div className={style.button_content}>
        <Button
          type="primary"
          shape="circle"
          icon={<EditOutlined style={{ color: "red" }} />}
          onClick={() => editTodo(task.id)}
        />
        <Button
          type="primary"
          danger
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
