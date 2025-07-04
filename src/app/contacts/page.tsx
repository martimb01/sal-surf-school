import styles from './page.module.css'
import { VT323 } from 'next/font/google';
// VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function page() {
  return (
    <div className={`${styles.main} ${vt323.className}`}>
        <h1>Contacts</h1>
    </div>
  )
}
