import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import style from "./Todo.module.css";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className={style.container}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${style.task} ${task.completed ? style.completed : ""}`}
      >
        {task.text}
      </p>
      <div>
        <div onClick={() => editTodo(task.id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div onClick={() => deleteTodo(task.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};
