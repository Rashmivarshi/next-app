import { getUser } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import styles from "./postUser.module.css"

const PostUser = async ({ userId }) => {
    const user = await getUser(userId);
    return (
        <div className={styles.container}>
            <Image
                className={styles.avatar}
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
            />
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValues}>{user.name}</span>

            </div>
        </div>
    )
}

export default PostUser












