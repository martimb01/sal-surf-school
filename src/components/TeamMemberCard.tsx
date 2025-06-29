import styles from './TeamMemberCard.module.css'
import Image from 'next/image'

type TeamMemberCardProps = {
  imageSrc: string;
  name: string;
  description: string;
};

export default function TeamMemberCard({imageSrc, name, description} : TeamMemberCardProps) {
  return (
    <div className={styles.wrapper}>
            <Image
                src={imageSrc}
                width={230}
                height={230}
                alt='O tuta'
                className={styles.memberImage}
            />
        <div className={styles.memberInfo}>

          <div className={styles.memberName}>
              {name}
          </div>
          <div className={styles.memberDescription}>
            {description}
          </div>
        </div>
    </div>
    
  )
}
