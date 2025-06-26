'use client'

import styles from './NavBar.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
    const [isMobileMenu, setIsMobileMenu] = useState<Boolean>(false)

    useEffect(() => {console.log(isMobileMenu)}, [isMobileMenu])

    return(
        <nav>
            <nav className={styles.navBar}>
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
                <NavList/>
            </nav>
            {isMobileMenu && <NavList />}    
        </nav>
    )
}

function NavList () {
    return (
            <ul className={styles.navList}>
                <li>Lessons</li>
                <hr />
                <li>About us</li>
                <hr />
                <li>Contacts</li>
            </ul>
    )
}