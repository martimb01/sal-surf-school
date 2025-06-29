import styles from './page.module.css'
import {VT323} from 'next/font/google'

//VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function page() {
  return (
    <main className={`${styles.main} ${vt323.className}`}>
      <h1>About us</h1>
      <h2>Origin</h2>
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          src="/barrel.mp4"
        >
        </video>
    </main>
  )
}
