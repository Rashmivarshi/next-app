import styles from "./register.module.css"
import RegisterForm from '@/components/registerform/RegisterForm'

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage