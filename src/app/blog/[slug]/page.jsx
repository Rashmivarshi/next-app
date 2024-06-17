import React, { Suspense } from 'react'
import styles from "./singlepost.module.css"
import Image from 'next/image'
import { getPost } from '@/lib/data';
import PostUser from '@/components/postUser/PostUser';

const SingleBlogPage = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug);
    return (
        <div className={styles.container}>
            {post.img && (<div className={styles.imgcontainer}>
                <Image src={post.img} alt='img' fill sizes className={styles.img} />
            </div>)}
            <div className={styles.textcontainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>published</span>
                        <span className={styles.detailValues}>{post?.createdAt?.toString().slice(4, 16)}</span>

                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SingleBlogPage