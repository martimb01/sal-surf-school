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
            <div className={styles.info}>
                <div className={styles.infoTitle}>
                    {title}
                    <hr />
                </div>
                <div className={styles.infoText}>
                    {info}
                </div>
            </div>
        </div>
    )
}