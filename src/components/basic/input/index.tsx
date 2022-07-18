import React, {InputHTMLAttributes} from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
    visuallyHidden?: boolean
}

const Input: React.FC<IInputProps> = (props) => {
    const {title, visuallyHidden = false, className, ...inputProps} = props

    return (
        <label className={styles.input}>
            <span className={visuallyHidden ? styles.visuallyHidden : styles.input__heading}>Number of guests</span>
            <input className={`${styles.inputValue} ${className}`} {...inputProps}/>
        </label>
    );
}

export default Input;