'use client'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './Carousel.module.css'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className={styles.imageWrapper}>
            <Image
              src='/surf/surf1.jpg'
              alt='slide 1'
              fill
              style={{objectFit: 'cover'}} 
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className={styles.imageWrapper}>
            <Image
              src='/surf/surf2.jpg'
              alt='slide 2'
              fill
              style={{objectFit: 'cover'}} 
            />
          </div>
        </div>
        <div className="embla__slide">
          <div className={styles.imageWrapper}>
            <Image
              src='/surf/surf3.jpg'
              alt='slide 3'
              fill
              style={{objectFit: 'cover'}} 
            />
          </div>
        </div>        
      </div>
    </div>
  );
}

