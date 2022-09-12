import styles from "../styles/Button.module.css";

export const Button = ({
  title,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      className={`${
        variant === "primary" ? styles.btn : styles.btnOutline
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
