import { useDispatch } from "react-redux";
import { removeTask } from "../store/todoSlice";
import styles from "../styles/TodoCard.module.css";
import { Draggable } from "react-beautiful-dnd";
import { Button } from "./Button";
import { useState } from "react";
import { Modal } from "./Modal";
import pfp from "../assets/pfp.svg";

export const TodoCard = ({ todo, index, status, onClick }) => {
  const dispatch = useDispatch();

  const [deleteModal, setDeleteModal] = useState(false);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 8px 0`,
    borderRadius: 8,
    // change background colour if dragging
    background: isDragging ? "#d9fff8" : "white",
    // rotate item if dragging
    transform: isDragging ? "rotate(3deg)" : "rotate(0deg)",
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
          <div className={styles.container}>
            {deleteModal && (
              <Modal>
                <div className={styles.deleteModal}>
                  <h5>Are you sure you want to delete this task?</h5>
                  <Button
                    title="Delete"
                    onClick={() => {
                      dispatch(removeTask({ id: todo.id, status }));
                      setDeleteModal(false);
                    }}
                    variant="outline"
                  />
                  <Button
                    title="Cancel"
                    onClick={() => setDeleteModal(false)}
                    variant="primary"
                  />
                </div>
              </Modal>
            )}
            <div onClick={onClick} className={styles.upperContainer}>
              <h4 className={styles.title}>{todo.title}</h4>
              <p className={styles.description}>{todo.description}</p>
            </div>

            <div className={styles.bottomContainer}>
              <Button
                title="Delete"
                onClick={() => {
                  setDeleteModal(true);
                }}
              />
              <img className={styles.pfp} src={pfp} alt="" />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
