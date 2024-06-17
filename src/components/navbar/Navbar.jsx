import React from 'react'
import Links from './links/Links'
import Link from 'next/link'
import styles from "./navbar.module.css"
import { auth } from '@/lib/auth'

const Navbar = async () => {
    const session = await auth();
    return (
        <div className={styles.container} >
            <Link className={styles.logo} href="/">Logo</Link>
            <div>
                <Links session={session} />
            </div>
        </div>
    )
}

export default Navbar
