"use client"
import React, { useEffect, useState } from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                <Image src="/contact.png" alt="contact" fill className={styles.img} sizes="(max-width: 768px)" />
            </div>
            <div className={styles.formcontainer}>
                <form action='' className={styles.form}>
                    <input type="text" placeholder='name and surname' />
                    <input type="text" placeholder='Email address' />
                    <input type='text' placeholder='Phone Number (optional)' />
                    <textarea name='' id='' cols="30" rows="10" placeholder='message' />
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage