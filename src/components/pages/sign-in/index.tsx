import React, {useState} from "react";
import styles from "./sign-in.module.scss";
import {Button, Input} from "../../basic";
import {Link} from "react-router-dom";
import {Routes} from "../../../common/enums/routes/routes";
import {useDispatch} from "react-redux";
import {authActions} from "../../../store/actions";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(authActions.signIn({
            email,
            password
        }) as any);
    }

    return (
        <main className={styles.signInPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <form className={styles.signInForm} autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                <h2 className={styles.signInForm__title}>Sign In</h2>
                <Input
                    title="Email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    title="Password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
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