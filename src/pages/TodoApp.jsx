import { useAuth } from "../contexts/AuthContext";

export const TodoApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>This is the todo app</h1>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
