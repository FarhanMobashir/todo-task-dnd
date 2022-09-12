import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button } from "../components/Button";
import { TodoList } from "../components/TodoList";
import { useAuth } from "../contexts/AuthContext";
import { updateTask } from "../store/todoSlice";
import styles from "../styles/TodoApp.module.css";

export const TodoApp = () => {
  const { logout } = useAuth();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = { ...todos };

    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    dispatch(updateTask(result));
    return result;
  };

  const reorder = (list, startIndex, endIndex, source) => {
    // console.log(list, startIndex, endIndex, source);
    let result = JSON.parse(JSON.stringify(list));
    let [removed] = result[source].splice(startIndex, 1);
    result[source].splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      //   console.log(source, destination);
      const items = reorder(
        todos,
        source.index,
        destination.index,
        source.droppableId
      );
      dispatch(updateTask(items));
    } else {
      const result = move(
        todos[source.droppableId],
        todos[destination.droppableId],
        source,
        destination
      );
      dispatch(updateTask(result));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Awesome Tasks</h1>
          <Button title="Logout" onClick={() => logout()} />
        </div>
        <div className={styles.content}>
          {Object.keys(todos).map((key, idx) => {
            let todoList = todos[key];
            return <TodoList key={key} todos={todoList} status={key} />;
          })}
        </div>
      </div>
    </DragDropContext>
  );
};
