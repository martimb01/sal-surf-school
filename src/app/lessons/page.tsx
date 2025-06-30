import styles from './page.module.css'
import Image from 'next/image'
import { VT323 } from 'next/font/google';
import LessonCard from '@/components/LessonCard';

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
      </section>
    </div> 
    )
}
