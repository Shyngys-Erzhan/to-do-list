import { useState } from "react";
import { TodoForm } from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import style from "./TodoWrapper.module.css";
import { Todo } from "../Todo/Todo";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.trim()) return;
    setTodos([
      ...todos,
      { id: uuidv4(), text: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (newTask, id) =>
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text: newTask, isEditing: !todo.isEditing } : todo
    )
  );


  return (
    <div className={style.container}>
      <h1 className={style.main_text}>To-do-list</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, id) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
