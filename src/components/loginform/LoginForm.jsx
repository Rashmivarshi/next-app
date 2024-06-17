"use client"
import { login } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import styles from "./loginform.module.css"

const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    return (
        <form action={formAction} className={styles.form}>
            <input type='text' placeholder='username' name="name" />
            <input type='password' placeholder='password' name="password" />
            <button>Login with credentials</button>
            {state?.error}
            <Link href="/register">don't have an account? <b>Register</b></Link>
        </form>
    )
}

export default LoginForm