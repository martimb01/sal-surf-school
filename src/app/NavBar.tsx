'use client'

import styles from './NavBar.module.css'
import { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";


export default function NavBar() {
    const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)

    return(
        <nav>
            <div className={styles.navBar}>
                <Link href='/' onClick={() => setIsMobileMenu(false)}>
                    <Image
                        className={styles.logo} 
                        src='/logo.png'
                        width={90}
                        height={90}
                        alt='Sal Surf School'
                    />
                </Link>
                <div className={styles.hamburgerButton}>
                    <RxHamburgerMenu onClick={() => setIsMobileMenu(!isMobileMenu)} size={50} />
                </div>
                <div className={styles.desktopNavList}>
                    <NavList />
                </div>
            </div>
            <div className={styles.mobileNavList}>
                <NavList isOpen={isMobileMenu} onLinkClick={() => setIsMobileMenu(false)} />
            </div>
        </nav>
    )
}

function NavList ({ isOpen = false, onLinkClick = () => {}}) {
    return (
        <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
                <Link href="/lessons" onClick={onLinkClick} >Lessons</Link>
            <hr />
                <Link href="/about" onClick={onLinkClick}>About us</Link>
            <hr />
                <Link href="/contacts">Contacts</Link>
        </ul>
    )
}