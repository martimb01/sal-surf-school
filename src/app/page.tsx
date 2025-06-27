import styles from "./page.module.css";
import Carousel from "../components/Carousel";
import {VT323} from 'next/font/google'
import Button from "@/components/ui/Button";
import { GiSurferVan } from "react-icons/gi";
import PresentationCard from "@/components/ui/PresentationCard";

//VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});


export default function Home() {
  return (
    <div className={`${styles.page} ${vt323.className}`}>
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <div className={styles.heroStack}>
            <div className={styles.heroMainSection}>
              <h1 className={styles.heroTitle}>Sal Surfing School</h1>
              <h2 className={styles.heroSubTitle}>Good vibes only 🤙</h2>
              <div className={styles.heroButton}><Button label={'Book lesson!'}/></div>
            </div>
            <Carousel />
          </div>
        </div>
        <div className={styles.firstSection}>
          <PresentationCard icon={<GiSurferVan size={150}/>} />
        </div>
      </main>
    </div>
  );
}
