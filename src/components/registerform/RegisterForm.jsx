"use client"
import { register } from "@/lib/action"
import styles from "./registerform.module.css"
import { useFormState } from "react-dom";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined)
    const router = useRouter();
    useEffect(() => {
        state?.success && router.push("/login")
    }, [state?.success, router])
    return (
        <form action={formAction} className={styles.form}>
            <input type='text' placeholder='username' name='name' />
            <input type='email' placeholder='email' name='email' />
            <input type='password' placeholder='password' name='password' />
            <input type='password' placeholder='confirm password' name='confirmpassword' />
            <button>Register</button>
            {state?.error}
            <Link href="/login">have already account? <b>Login</b></Link>
        </form>
    )
}

export default RegisterForm