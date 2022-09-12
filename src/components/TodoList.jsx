import { AddTodo } from "./AddTodo";
import { TodoCard } from "./TodoCard";
import styles from "../styles/TodoList.module.css";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { Modal } from "./Modal";
import { TextField } from "./TextField";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/todoSlice";
import { useSelector } from "react-redux";

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#329c89" : "rgb(240, 240, 240)",
  padding: 8,
  borderRadius: 8,
  width: 300,
});

export const TodoList = ({ todos, status }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const dispatch = useDispatch();
  const todosStore = useSelector((state) => state.todos);

  const updateTodo = (todo) => {
    const newTodos = { ...todosStore };

    let updated = todosStore[status].map((todo) => {
      if (todo.id === selectedTodo.id) {
        return {
          ...todo,
          title: selectedTodo.title,
          description: selectedTodo.description,
        };
      }
      return todo;
    });

    dispatch(updateTask({ ...newTodos, [status]: updated }));
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <div className={styles.statusContainer}>
          <h3 className={styles.title}>{status}</h3>
          <small className={styles.todoCount}>{todos.length}</small>
        </div>

        <div>
          <AddTodo status={status} />
        </div>
      </div>

      {showModal && (
        <Modal>
          <div className={styles.editModal}>
            <h1>Edit</h1>
            <TextField
              type="text"
              label="Title"
              value={selectedTodo.title}
              onChange={(e) =>
                setSelectedTodo({ ...selectedTodo, title: e.target.value })
              }
            />
            <TextField
              label="Description"
              textarea={true}
              type="text"
              value={selectedTodo.description}
              onChange={(e) =>
                setSelectedTodo({
                  ...selectedTodo,
                  description: e.target.value,
                })
              }
            />
            <div className={styles.bottomContainer}>
              <Button
                title={`Close`}
                variant="outline"
                onClick={() => {
                  setShowModal(false);
                  setSelectedTodo(null);
                }}
              />
              <Button
                title={`Save`}
                onClick={() => {
                  setShowModal(false);
                  updateTodo(selectedTodo);
                }}
              />
            </div>
          </div>
        </Modal>
      )}
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todos.map((todo, idx) => (
              <TodoCard
                onClick={() => {
                  setShowModal(true);
                  setSelectedTodo(todo);
                }}
                key={todo.id}
                todo={todo}
                index={idx}
                status={status}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
