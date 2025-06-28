import styles from "./page.module.css";
import Carousel from "../components/Carousel";
import {VT323} from 'next/font/google'
import Button from "@/components/ui/Button";
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
            </div>
            <Carousel />
            <div className={styles.heroButton}><Button label={'Book lesson!'}/></div>
          </div>
        </div>
        <div className={styles.firstSection}>          
          <PresentationCard
            title={'Safety'}
            emoji={'⛑️'}
            info={
              `All our teachers are professional trained and certified to make sure your experience is safe and fun!`
            } 
            />
          <PresentationCard 
            title={'Transport'}
            emoji={'🚐'} 
            info={
              `Well grab you anywhere in Lisbon, lets us know where and when!`
            } 
            />
            
          <PresentationCard 
            title={'Fun'}
            emoji={'🏄‍♀️'}
            info={
              `Cause thats what its all about! Doesnt matter if its your first time surfing
              or youre a full blown professional, we got you covered on the fun factor!`
            } 
            />                  
        </div>
      </main>
    </div>
  );
}
