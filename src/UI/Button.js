import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={{ color: props.style.color, fontSize: props.style.fontSize }}
      type={props.type}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
