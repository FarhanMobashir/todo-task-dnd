import { AddTodo } from "./AddTodo";
import { TodoCard } from "./TodoCard";
import styles from "../styles/TodoList.module.css";
import { Droppable } from "react-beautiful-dnd";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: 8,
  width: 250,
});

export const TodoList = ({ todos, status }) => {
  return (
    <div className={styles.container}>
      <h1>{status}</h1>
      <small>{todos.length}</small>
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, idx) => (
              <TodoCard key={todo.id} todo={todo} index={idx} status={status} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTodo status={status} />
    </div>
  );
};
