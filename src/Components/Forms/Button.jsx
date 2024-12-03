import React from "react";
import styles from "./Button.module.css";

const Button = ({innerText, ...props}) => {
  return <button className={styles.button} {...props}>{innerText}</button>;
};

export default Button;
