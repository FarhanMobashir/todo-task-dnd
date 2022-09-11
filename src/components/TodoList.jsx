import { AddTodo } from "./AddTodo";
import { TodoCard } from "./TodoCard";

export const TodoList = ({ todos, onDelete, onEdit, status }) => {
  return (
    <div className="todo-list">
      <h1>{status}</h1>
      <small>{todos.length}</small>
      <ul>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo status={status} />
    </div>
  );
};
