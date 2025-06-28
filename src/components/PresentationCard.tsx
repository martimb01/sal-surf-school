type Props = {
  title: string;
  emoji: string;
  info: string;
};

import styles from './PresentationCard.module.css'
export default function PresentationCard({title, emoji, info}: Props) {
    return(
        <div className={styles.card}>
            <div className={styles.topRow}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.emoji}>
                    {emoji}
                </div>
            </div>
            <div className={styles.bottomRow}>
                {info}
            </div>
        </div>
    )
}