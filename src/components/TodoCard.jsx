import { useDispatch } from "react-redux";
import { removeTask } from "../store/todoSlice";

export const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button
        onClick={() => {
          dispatch(removeTask(todo.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};
