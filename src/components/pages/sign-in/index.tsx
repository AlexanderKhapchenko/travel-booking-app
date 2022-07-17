import React from "react";
import styles from "./sign-in.module.scss";
import {Button} from "../../basic";
import {Link} from "react-router-dom";
import {Routes} from "../../../constants/routes";


const SignIn = () => {
    return (
        <main className={styles.signInPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <form className={styles.signInForm} autoComplete="off">
                <h2 className={styles.signInForm__title}>Sign In</h2>
                <label className={styles.input}>
                    <span className={styles.input__heading}>Email</span>
                    <input name="email" type="email" required/>
                </label>
                <label className={styles.input}>
                    <span className={styles.input__heading}>Password</span>
                    <input name="password" type="password" autoComplete="new-password" required/>
                </label>
                <Button type="submit">Sign In</Button>
            </form>
            <span>
                Already have an account?
                <Link to={Routes.SignUp} className={styles.signInForm__link}>Sign Up</Link>
            </span>
        </main>
    );
}

export default SignIn;