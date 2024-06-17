"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./navLink.module.css"

const NavLink = ({ item }) => {

    const pathname = usePathname();
    return (
        <Link href={item.path} className={`${styles.container}
         ${pathname === item.path && styles.active}`}>
            {item.title}
        </Link>
    )
}

export default NavLink