'use client'
import {VT323} from 'next/font/google'
import styles from './Button.module.css'

//VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});


export default function Button({label} : {label:string}) {
    const handleClick = () => console.log('Clicked!')
    return (
        <button 
            onClick={handleClick}
            className={`${vt323.className} ${styles.button}`}
        >{label}
        </button>
    )
}