import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Modal.module.css";

const modalRoot = document.getElementById("modal");

export const Modal = ({ children }) => {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elementRef.current);
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  return createPortal(
    <div className={styles.modal}>{children}</div>,
    elementRef.current
  );
};
