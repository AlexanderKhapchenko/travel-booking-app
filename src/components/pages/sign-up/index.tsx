import React, {useState} from "react";
import styles from "./sign-up.module.scss";
import {Button} from "../../basic";
import {Link} from "react-router-dom";
import {Routes} from "../../../constants/routes";

interface ISignInProps {
    setUsername: Function
}

const SignUp: React.FC<ISignInProps> = (props) => {
    const {setUsername} = props;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        try{
            validationName(name);
            validationGmail(email);
            validationPassword(password);

            setUsername(name);
        }catch({message}){
            alert(message);
        }
    }

    const validationName = (name: string) => {
        if (name.replace(/\s/g, '').length < 1) {
            throw new Error("The name cannot be empty or less than one letter");
        }
    }

    const validationGmail = (email: string) => {
        const re = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
        if (!re.test(email)) {
            throw new Error("Incorrect email. Email must be from gmail");
        }
    }

    const validationPassword = (password: string) => {
        if (password.length < 3) {
            throw new Error("Incorrect password. Password must be longer than 3 characters");
        }
    }

    return (
        <main className={styles.signUpPage}>
            <h1 className={styles.visuallyHidden}>Travel App</h1>
            <form className={styles.signUpForm} autoComplete="off" onSubmit={onSubmit}>
                <h2 className={styles.signUpForm__title}>Sign Up</h2>
                <label className={styles.input}>
                    <span className={styles.input__heading}>Full name</span>
                    <input name="full-name" type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label className={styles.input}>
                    <span className="input__heading">Email</span>
                    <input name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label className={styles.input}>
                    <span className={styles.input__heading}>Password</span>
                    <input name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <Button className="button" type="submit">Sign Up</Button>
            </form>
            <span>
                Already have an account?
                <Link to={Routes.SignIn} className={styles.signUpForm__link}>Sign In</Link>
            </span>
        </main>
    );
}

export default SignUp;