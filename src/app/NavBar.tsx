'use client'

import styles from './NavBar.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)

    useEffect(() => {console.log(isMobileMenu)}, [isMobileMenu])

    return(
        <nav>
            <div className={styles.navBar}>
                <Image
                    className={styles.logo} 
                    src='/logo.png'
                    width={90}
                    height={90}
                    alt='Sal Surf School'
                />
                <div className={styles.hamburgerButton}>
                    <RxHamburgerMenu onClick={() => setIsMobileMenu(!isMobileMenu)} size={50} />
                </div>
                <div className={styles.desktopNavList}>
                    <NavList />
                </div>
            </div>
            <div className={styles.mobileNavList}>
                <NavList isOpen={isMobileMenu} />
            </div>
        </nav>
    )
}

function NavList ({ isOpen = false }) {
    return (
            <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <Link href=''>Lessons</Link>
                <hr />
                <Link href=''>About us</Link>
                <hr />
                <Link href=''>Contacts</Link>
            </ul>
    )
}