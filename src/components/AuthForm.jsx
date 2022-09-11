import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/AuthForm.module.css";
import { TextField } from "./TextField";

export const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [users, setUsers] = useState([]);

  const { login, loginSession } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      if (rememberMe) {
        login(user);
        navigate("/app");
      } else {
        loginSession(user);
        navigate("/app");
      }
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type={"text"}
          placeholder={"Enter your email"}
          info={""}
        />

        <TextField
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          placeholder={"Enter your password"}
          info={""}
        />
        <label className={styles.checkboxContainer}>
          Remember me
          <input
            type="checkbox"
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
          />
        </label>
        <button className={styles.btn}>Login</button>
      </form>
    </div>
  );
};
