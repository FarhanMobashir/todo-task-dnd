import { useState } from "react";
import { TextField } from "./TextField";
import styles from "../styles/AddTodo.module.css";
import { addTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";

export const AddTodo = ({ status }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.length !== 0) {
      dispatch(addTask({ title, description, status }));
      setShowAddTodo(false);
      setTitle("");
      setDescription("");
    } else {
      toast.error("Please enter a title");
    }
  };

  if (!showAddTodo) {
    return (
      <div className={styles.addTodo}>
        <FaPlus
          style={{
            fontSize: "1rem",
            color: "#329c89",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px 0",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => {
            setShowAddTodo(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.mainContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type={"text"}
          placeholder={"Enter your title"}
          info={""}
          noLabel={true}
          className={styles.noOutlineInput}
        />

        <TextField
          label={"Description"}
          textarea={true}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type={"text"}
          placeholder={"Enter your description"}
          info={""}
          noLabel={true}
          className={styles.noOutlineInput}
        />
        <div className={styles.bottomContainer}>
          <Button type="submit" title={"Add"} />
          <Button
            type="Close"
            variant="outline"
            title={"Close"}
            onClick={() => {
              setShowAddTodo(false);
            }}
          />
        </div>
      </form>
    </div>
  );
};
