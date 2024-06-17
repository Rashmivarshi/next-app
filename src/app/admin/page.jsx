import { Suspense } from "react"
import styles from "./admin.module.css"
import AdminPost from "@/components/adminPost/AdminPost"
import AdminUser from "@/components/adminUser/AdminUser"
import AdminPostForm from "@/components/adminPostForm/AdminPostForm"
import AdminUserForm from "@/components/adminUserForm/AdminUserForm"
import { auth } from "@/lib/auth"

const AdminPage = async () => {
    const session = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.rows}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading..</div>}>
                        <AdminPost />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>

            <div className={styles.rows}>
                <div className={styles.col}>
                    <Suspense fallback={<div>Loading..</div>}>
                        <AdminUser />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm userId={session?.id} />
                </div>
            </div>
        </div >
    )
}

export default AdminPage