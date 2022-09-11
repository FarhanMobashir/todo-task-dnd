import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/todoSlice";
import { Modal } from "./Modal";
import styles from "../styles/TodoCard.module.css";
import { TextField } from "./TextField";
import { Draggable } from "react-beautiful-dnd";

export const TodoCard = ({ todo, index, status }) => {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(false);

  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 8px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button
              onClick={() => {
                dispatch(removeTask({ id: todo.id, status }));
              }}
            >
              Delete
            </button>
            <button onClick={() => setShowEditModal(true)}>Edit</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};
