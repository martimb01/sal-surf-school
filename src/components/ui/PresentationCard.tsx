
import styles from './PresentationCard.module.css'
export default function PresentationCard(
    {icon}: {icon: React.ReactNode}
) {
    return(
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.cardInfo}>
                <h1 className={styles.infoTitle}>Transport</h1>
                <h2 className={styles.infoText}>
                    <hr />
                    Well grab u anywhere in Lisbon! Lets kno
                    
                </h2>
            </div>
        </div>
    )
}