import { AuthForm } from "../components/AuthForm";
import styles from "../styles/LandingPage.module.css";
import loginImg from "../assets/loginIllustration.svg";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const LandingPage = () => {
  const { user, sessionUser } = useAuth();
  if (user || sessionUser) {
    return <Navigate to="/app" />;
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>.taskez</h1>
        <p className={styles.description}>
          A simple task management app that helps you keep track of your tasks
        </p>
        <img src={loginImg} className={styles.loginImg} alt="" />
      </div>
      <AuthForm />
    </div>
  );
};
