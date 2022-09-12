import styles from "../styles/TextField.module.css";

export const TextField = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  info = "",
  autoFocus = false,
  noLabel = false,
  className = "",
  textarea = false,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor="">
        {noLabel ? "" : label}
        {textarea ? (
          <>
            <textarea
              className={`${styles.input} ${className}`}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              autoFocus={autoFocus}
            />
          </>
        ) : (
          <>
            <input
              value={value}
              onChange={onChange}
              type={type}
              className={styles.input + " " + className}
              placeholder={placeholder}
              autoFocus={autoFocus}
            />
            <small>{info}</small>
          </>
        )}
      </label>
    </div>
  );
};
