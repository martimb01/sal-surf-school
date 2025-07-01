import styles from './page.module.css'
import Image from 'next/image'
import { VT323 } from 'next/font/google';
import LessonCard from '@/components/LessonCard';
import Button from '@/components/ui/Button';

// VT323 Font properties
const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export default function page() {
  return (
    <div className={`${styles.main} ${vt323.className}`}>
      <section className={styles.imageContainer}>
        <h1>Surf lessons</h1>
        <Image
          className={styles.image}
          src='/surfHeader.jpg'
          alt='surf header'
          fill
          objectFit='cover'
        />
      </section>
      <section className={styles.container}>
        <LessonCard 
          title={'Monthly Lessons'} 
          subTitle={'Regular classes, to learn, perfect, and master surfing'}
          price1={'1X Weekly - 80'} 
          price2={'2X Weekly - 140'}
          price3={'3X Weekly - 220'}
        />
        <hr />
        <LessonCard 
          title={'Lessons Pack'} 
          subTitle={'Pick your own timeframe and train intensity'}
          price1={'4 classes - 120'}
          price2={''}
          price3={''}
        />
        <hr />
        <LessonCard 
          title={'Private Lessons'} 
          subTitle={'Total attention towards improving your surf'}
          price1={'1X - 85'}
          price2={'3X - 240'}
          price3={'5X - 375'}
        />
      <div className={styles.button}>
        <Button label='Book now!' />
      </div>
      </section>
    </div> 
    )
}
