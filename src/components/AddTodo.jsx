import { useState } from "react";
import { TextField } from "./TextField";
import styles from "../styles/AuthForm.module.css";
import { addTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";

export const AddTodo = ({ status }) => {
  const [title, setTitle] = useState("test");
  const [description, setDescription] = useState("desc");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("from add", status);
    dispatch(addTask({ title, description, status }));
    // setTitle("");
    // setDescription("");
  };

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
        />

        <TextField
          label={"Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type={"text"}
          placeholder={"Enter your description"}
          info={""}
        />
        <button className={styles.btn} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};
