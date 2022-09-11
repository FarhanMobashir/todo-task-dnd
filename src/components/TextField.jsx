import styles from "../styles/TextField.module.css";

export const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  info = "",
  autoFocus = false,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor="">
        {label}:
        <input
          value={value}
          onChange={onChange}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
        <small>{info}</small>
      </label>
    </div>
  );
};
