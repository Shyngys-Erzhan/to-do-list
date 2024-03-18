import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import style from "./Todo.module.css";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const { Text } = Typography;

  return (
    <div className={style.container}>
      <Text
        type="text"
        className={`${style.task} ${task.completed ? style.completed : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.text}
      </Text>
      <Button
        type="primary"
        shape="circle"
        icon={<EditOutlined style={{ color: "red" }} />}
        onClick={() => editTodo(task.id)}
        style={{ backgroundColor: "#1677ff", color: "#ff4d4f" }}
      />
      <Button
        type="primary"
        danger
        shape="circle"
        icon={<DeleteOutlined />}
        onClick={() => deleteTodo(task.id)}
        style={{ backgroundColor: "#ff4d4f", color: "#1677ff" }}
      />
    </div>
  );
};
