import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button {...props} className={`${styles.button} ${props.className}`}>{props.children}</button>
    );
}

export  default Button;