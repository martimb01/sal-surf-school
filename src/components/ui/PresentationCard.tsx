type Props = {
  icon: React.ReactNode;
  title: string;
  info: string;
};

import styles from './PresentationCard.module.css'
export default function PresentationCard({icon, title, info}: Props) {
    return(
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.cardInfo}>
                <h1 className={styles.infoTitle}>{title}</h1>
                <h2 className={styles.infoText}>
                    <hr />
                    {info}
                </h2>
            </div>
        </div>
    )
}