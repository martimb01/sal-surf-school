import styles from './TeamMemberCard.module.css'
import Image from 'next/image'

export default function TeamMemberCard() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.memberImage}>
            <Image
                src='/team/tuta.jpg'
                width={100}
                height={100}
                alt='O tuta'
            />
        </div>
        <div className={styles.memberDescription}>
            Description
        </div>
    </div>
    
  )
}
