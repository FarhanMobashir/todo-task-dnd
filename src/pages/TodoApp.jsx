import { useSelector } from "react-redux";
import { Modal } from "../components/Modal";
import { TodoList } from "../components/TodoList";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/TodoApp.module.css";

export const TodoApp = () => {
  const { logout } = useAuth();
  const todos = useSelector((state) => state.todos);

  const transformTodosBasedOnStatus = () => {
    const todosToDo = todos.filter((todo) => todo.status === "todo");
    const todosInProgress = todos.filter(
      (todo) => todo.status === "inProgress"
    );
    const todosDone = todos.filter((todo) => todo.status === "completed");

    return {
      todosToDo: {
        status: "todo",
        todos: todosToDo,
      },
      todosInProgress: {
        status: "inProgress",
        todos: todosInProgress,
      },
      todosDone: {
        status: "completed",
        todos: todosDone,
      },
    };
  };

  console.log(todos);

  return (
    <div className={styles.mainContainer}>
      {/* <Modal>
        <h1>hello modal</h1>
      </Modal> */}
      <div className={styles.header}>
        <h1>This is the todo app</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <div className={styles.content}>
        {Object.keys(transformTodosBasedOnStatus()).map((key) => {
          let todoList = transformTodosBasedOnStatus()[key];
          return <TodoList todos={todoList.todos} status={todoList.status} />;
        })}
      </div>
    </div>
  );
};
