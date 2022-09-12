import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  const [showPassword, setShowPassword] = useState(false);

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
            <div className={styles.inputContainer + " " + className}>
              <input
                value={value}
                onChange={onChange}
                type={showPassword ? "text" : type}
                className={styles.input}
                placeholder={placeholder}
                autoFocus={autoFocus}
              />
              {type === "password" && !showPassword && (
                <FaEye
                  onClick={() => setShowPassword(true)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              )}

              {type === "password" && showPassword && (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              )}
            </div>
            <small>{info}</small>
          </>
        )}
      </label>
    </div>
  );
};
