"use client"
import { addUser } from "@/lib/action";
import styles from "./adminuserform.module.css"
import { useFormState } from "react-dom";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);
    return (
        <form action={formAction} className={styles.container}>
            <h1>Add New Post</h1>
            <input type="text" name="name" placeholder="name" />
            <input type="text" name="email" placeholder="email" />
            <input type="password" name="password" placeholder="password" />
            <input type="text" name="img" placeholder="image" />
            <select name="isAdmin?">
                <option value="false">IsAdmin?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button>Add</button>
            {state && state?.error}
        </form>
    )
}

export default AdminUserForm