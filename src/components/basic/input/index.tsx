import React, {InputHTMLAttributes} from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string
}

const Input: React.FC<IInputProps> = (props) => {
    const {title, ...inputProps} = props

    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>Number of guests</span>
            <input className={styles.inputValue} {...inputProps}/>
        </label>
    );
}

export default Input;