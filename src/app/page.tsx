import styles from "./page.module.css";
import Carousel from "../components/Carousel";
import {VT323} from 'next/font/google'

//VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  return (
    <div className={`${styles.page} ${vt323.className}`}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <div className={styles.heroStack}>
            <h1 className={styles.heroTitle}>Sal Surfing School</h1>
            <Carousel />
          </div>
        </div>
        <div className={styles.firstSection}></div>
      </main>
    </div>
  );
}
