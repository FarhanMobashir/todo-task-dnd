import { AuthForm } from "../components/AuthForm";
import styles from "../styles/LandingPage.module.css";
import loginImg from "../assets/loginIllustration.svg";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const LandingPage = () => {
  const { user, sessionUser } = useAuth();
  console.log(user, sessionUser);
  if (user || sessionUser) {
    return <Navigate to="/app" />;
  }

  return (
    <div className={styles.mainContainer}>
      <img src={loginImg} alt="" />
      <AuthForm />
    </div>
  );
};
